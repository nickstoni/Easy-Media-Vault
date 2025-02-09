const pinataService = require('../services/pinataService');

// Controller to handle file upload
const uploadFile = async (req, res) => {
    try {
        // Check if a file is provided
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Pin the file to IPFS using Pinata service
        const cid = await pinataService.pinFileToIPFS(req.file);

        // Respond with the IPFS CID
        res.json({ cid });
    } catch (error) {
        console.error('Error uploading file to IPFS:', error.message);
        res.status(500).json({ error: 'Error uploading file to IPFS' });
    }
};

module.exports = { uploadFile };