# Decentralized Media Vault - Frontend Documentation

## Overview
The Decentralized Media Vault is a decentralized application that allows users to securely upload, store, and share personal files using IPFS storage via Pinata. This frontend application is built with React and provides a user-friendly interface for file management.

## Features
- Drag & drop file upload functionality
- Generation and display of unique IPFS CIDs (Content Identifiers)
- Integration with Pinata API for pinning and unpinning files
- Optional password protection for file access

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/decentralized-media-vault.git
   ```
2. Navigate to the frontend directory:
   ```
   cd decentralized-media-vault/frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

### Usage
- Use the drag-and-drop area to upload files.
- After uploading, the application will display the generated IPFS CID.
- You can pin or unpin files using the provided options.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.