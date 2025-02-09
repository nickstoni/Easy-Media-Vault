const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
require('dotenv').config();

const pinFileToIPFS = async (file) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const formData = new FormData();
    formData.append('file', fs.createReadStream(file.path));

    try {
        const response = await axios.post(url, formData, {
            maxContentLength: 'Infinity',
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'pinata_api_key': process.env.PINATA_API_KEY,
                'pinata_secret_api_key': process.env.PINATA_SECRET_API_KEY
            }
        });

        return response.data.IpfsHash;
    } catch (error) {
        console.error('Error pinning file to IPFS:', error.response ? error.response.data : error.message);
        throw new Error('Failed to pin file to IPFS');
    }
};

module.exports = { pinFileToIPFS };