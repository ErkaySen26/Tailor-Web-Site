import express from 'express';
import multer from 'multer';
import cors from 'cors';
import pdf from 'pdf-parse';
import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(cors());

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.post('/convert', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const dataBuffer = fs.readFileSync(req.file.path);
    
    // Parse PDF
    const pdfData = await pdf(dataBuffer);
    const text = pdfData.text;
    
    // Convert text to rows (simple example - you might need to adjust this based on your PDF structure)
    const rows = text.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => [line]);

    // Create Excel workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Save Excel file
    const excelFileName = path.join('uploads', `${path.parse(req.file.originalname).name}.xlsx`);
    XLSX.writeFile(wb, excelFileName);

    // Send Excel file
    res.download(excelFileName, (err) => {
      if (err) {
        console.error('Error sending file:', err);
      }
      // Clean up files
      fs.unlinkSync(req.file.path);
      fs.unlinkSync(excelFileName);
    });

  } catch (error) {
    console.error('Conversion error:', error);
    res.status(500).json({ error: 'Error converting PDF to Excel' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 