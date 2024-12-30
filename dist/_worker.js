/**
 * Handles default path requests when no specific route matches.
 * Generates and returns a cloud drive interface HTML page.
 * @param {URL} url - The URL object of the request
 * @param {Request} request - The incoming request object
 * @returns {Response} HTML response with cloud drive interface
 */
async function handleDefaultPath(url, request) {
	const host = request.headers.get('Host');
	const DrivePage = `
	  <!DOCTYPE html>
	  <html lang="en">
	  <head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>${host} - Cloud Drive</title>
		  <style>
			  /* CSS styles for the cloud drive interface */
		  </style>
	  </head>
	  <body>
		  <div class="container">
			  <h1>Cloud Drive</h1>
			  <p>Welcome to your personal cloud storage. Here are your uploaded files:</p>
			  <button id="clearAllBtn" class="clear-all-btn">Clear All Files</button>
			  <ul id="fileList" class="file-list"></ul>
			  <div id="uploadArea" class="upload-area">
				  <div class="upload-icon">📁</div>
				  <h2>Upload a File</h2>
				  <p class="upload-text">Drag and drop a file here or click to select</p>
				  <input type="file" id="fileInput" hidden>
			  </div>
			  <div id="uploadStatus" class="upload-status"></div>
		  </div>
		  <script>
			  // JavaScript for managing file uploads and local storage
			  function loadFileList() {
				  const fileList = document.getElementById('fileList');
				  const savedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
				  fileList.innerHTML = '';
				  savedFiles.forEach((file, index) => {
					  const li = document.createElement('li');
					  li.innerHTML = \`
						  <span class="file-icon">📄</span>
						  <a href="https://ipfs.io/ipfs/\${file.Url.split('/').pop()}" class="file-link" target="_blank">\${file.Name}</a>
						  <div class="file-actions">
							  <button class="delete-btn" onclick="deleteFile(\${index})">
								  <span class="file-icon">❌</span>
							  </button>
						  </div>
					  \`;
					  fileList.appendChild(li);
				  });
			  }

			  function deleteFile(index) {
				  const savedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
				  savedFiles.splice(index, 1);
				  localStorage.setItem('uploadedFiles', JSON.stringify(savedFiles));
				  loadFileList();
			  }

			  document.getElementById('clearAllBtn').addEventListener('click', () => {
				  if (confirm('Are you sure you want to clear all files?')) {
					  localStorage.removeItem('uploadedFiles');
					  loadFileList();
				  }
			  });

			  loadFileList();

			  const uploadArea = document.getElementById('uploadArea');
			  const fileInput = document.getElementById('fileInput');
			  const uploadStatus = document.getElementById('uploadStatus');

			  uploadArea.addEventListener('dragover', (e) => {
				  e.preventDefault();
				  uploadArea.classList.add('drag-over');
			  });

			  uploadArea.addEventListener('dragleave', () => {
				  uploadArea.classList.remove('drag-over');
			  });

			  uploadArea.addEventListener('drop', (e) => {
				  e.preventDefault();
				  uploadArea.classList.remove('drag-over');
				  const files = e.dataTransfer.files;
				  if (files.length) {
					  handleFileUpload(files[0]);
				  }
			  });

			  uploadArea.addEventListener('click', () => {
				  fileInput.click();
			  });

			  fileInput.addEventListener('change', (e) => {
				  const file = e.target.files[0];
				  if (file) {
					  handleFileUpload(file);
				  }
			  });

			  async function handleFileUpload(file) {
				  uploadStatus.textContent = \`Uploading: \${file.name}...\`;
				  const formData = new FormData();
				  formData.append('file', file);

				  try {
					  const response = await fetch('https://app.img2ipfs.org/api/v0/add', {
						  method: 'POST',
						  body: formData,
						  headers: {
							  'Accept': 'application/json',
						  },
					  });

					  if (!response.ok) {
						  throw new Error('Upload failed');
					  }

					  const result = await response.json();
					  uploadStatus.textContent = \`File uploaded successfully! IPFS Hash: \${result.Hash}\`;
					  const savedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
					  savedFiles.push(result);
					  localStorage.setItem('uploadedFiles', JSON.stringify(savedFiles));
					  loadFileList();
					  
				  } catch (error) {
					  console.error('Error:', error);
					  uploadStatus.textContent = 'Upload failed. Please try again.';
				  }
			  }
		  </script>
	  </body>
	  </html>
	`;

	// 返回伪装的网盘页面
	return new Response(DrivePage, {
		headers: {
			"content-type": "text/html;charset=UTF-8",
		},
	});
}
