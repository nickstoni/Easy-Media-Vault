const express = require('express');
const multer = require('multer');
const { uploadFile } = require('../controllers/fileController');

const router = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// POST /upload - Handle file upload
router.post('/', upload.single('file'), uploadFile);

module.exports = router;