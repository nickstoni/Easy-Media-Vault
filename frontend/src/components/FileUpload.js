import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [ipfsHash, setIpfsHash] = useState('');
    const [error, setError] = useState('');
    const [uploading, setUploading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Handle file selection
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setIpfsHash('');
        setError('');
        setSuccess(false);
    };

    // Handle drag over event
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // Handle file drop event
    const handleDrop = (event) => {
        event.preventDefault();
        setFile(event.dataTransfer.files[0]);
        setIpfsHash('');
        setError('');
        setSuccess(false);
    };

    // Handle file upload
    const handleUpload = async () => {
        if (!file) {
            setError('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setUploading(true);
        try {
            const response = await axios.post('http://localhost:5001/upload', formData);
            setIpfsHash(response.data.cid);
            setError('');
            setSuccess(true);
        } catch (err) {
            console.error('Error uploading file:', err.response || err.message || err);
            setError('Error uploading file. Please try again.');
            setSuccess(false);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="upload-container">
            <img src="/pinataimg.jpg" alt="Pinata" className="pinata-image" />
            <h2>Upload File</h2>
            <div 
                className="upload-area"
                onDragOver={handleDragOver} 
                onDrop={handleDrop} 
                onClick={() => document.getElementById('fileInput').click()}
            >
                <p>Drag & drop your file here or click to select</p>
                <input 
                    type="file" 
                    id="fileInput" 
                    onChange={handleFileChange} 
                    style={{ display: 'none' }} 
                />
            </div>
            {file && <p>Selected file: {file.name}</p>}
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
            {success && <p className="success-message">File uploaded successfully!</p>}
            {ipfsHash && <p>IPFS Hash: {ipfsHash}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default FileUpload;