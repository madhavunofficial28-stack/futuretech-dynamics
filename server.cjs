const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const PDFDocument = require('pdfkit');

const app = express();

app.use(cors());
app.use(express.json());

// Helper function to generate PDF matching FutureTech Dynamics template layout
const generatePDFBuffer = (fullName, email, subject, message) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: 40 });
    const buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => resolve(Buffer.concat(buffers)));
    doc.on('error', reject);

    const formattedDate = new Date().toLocaleString('en-US', {
      dateStyle: 'short',
      timeStyle: 'medium'
    });

    // --- HEADER SECTION ---
    doc.fillColor('#0B192C').fontSize(22).font('Helvetica-Bold').text('FUTURETECH ', 40, 45, { continued: true });
    doc.fillColor('#00A9FF').text('DYNAMICS');
    doc.fillColor('#666666').fontSize(10).font('Helvetica').text('ADVANCED RF & AUTOMOTIVE SYSTEMS', 40, 70);

    // Title & Date (Right)
    doc.fillColor('#0B192C').fontSize(16).font('Helvetica-Bold').text('FUTURETECH -', 340, 45, { align: 'right' });
    doc.text('INQUIRY REPORT', 340, 63, { align: 'right' });
    doc.fillColor('#555555').fontSize(10).font('Helvetica').text(`Generated on: ${formattedDate}`, 340, 83, { align: 'right' });

    // Cyan Divider Line
    doc.moveTo(40, 105).lineTo(555, 105).lineWidth(3).strokeColor('#00A9FF').stroke();

    // --- CUSTOMER INFORMATION SECTION ---
    doc.fillColor('#0B192C').fontSize(12).font('Helvetica-Bold').text('CUSTOMER INFORMATION', 40, 125);
    doc.moveTo(40, 142).lineTo(555, 142).lineWidth(0.8).strokeColor('#e0e0e0').stroke();

    // Full Name Row
    doc.fillColor('#1a2b49').fontSize(11).font('Helvetica-Bold').text('Full Name', 50, 156);
    doc.fillColor('#222222').fontSize(11).font('Helvetica').text(fullName, 200, 156);
    doc.moveTo(40, 178).lineTo(555, 178).lineWidth(0.5).strokeColor('#e8e8e8').stroke();

    // Email Address Row
    doc.fillColor('#1a2b49').fontSize(11).font('Helvetica-Bold').text('Email Address', 50, 192);
    doc.fillColor('#222222').fontSize(11).font('Helvetica').text(email, 200, 192);
    doc.moveTo(40, 214).lineTo(555, 214).lineWidth(0.8).strokeColor('#e0e0e0').stroke();

    // --- INQUIRY DETAILS SECTION ---
    doc.fillColor('#0B192C').fontSize(12).font('Helvetica-Bold').text('INQUIRY DETAILS', 40, 235);
    doc.moveTo(40, 252).lineTo(555, 252).lineWidth(0.8).strokeColor('#e0e0e0').stroke();

    // Subject Row
    doc.fillColor('#1a2b49').fontSize(11).font('Helvetica-Bold').text('Subject', 50, 266);
    doc.fillColor('#222222').fontSize(11).font('Helvetica').text(subject || 'N/A', 200, 266);
    doc.moveTo(40, 288).lineTo(555, 288).lineWidth(0.8).strokeColor('#e0e0e0').stroke();

    // --- USER MESSAGE SECTION ---
    doc.fillColor('#0B192C').fontSize(12).font('Helvetica-Bold').text('USER MESSAGE', 40, 310);
    doc.moveTo(40, 328).lineTo(555, 328).lineWidth(0.8).strokeColor('#e0e0e0').stroke();

    // Message Box Container
    doc.roundedRect(40, 342, 515, 160, 6).lineWidth(0.8).strokeColor('#d5d5d5').stroke();
    doc.fillColor('#222222').fontSize(12).font('Helvetica').text(message, 55, 360, { width: 485 });

    doc.end();
  });
};

app.post('/api/send-company-email', async (req, res) => {
  try {
    const { fullName, email, subject, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ success: false, message: 'All required fields must be filled.' });
    }

    const pdfBuffer = await generatePDFBuffer(fullName, email, subject, message);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'madhav.unofficial28@gmail.com',
        pass: 'mtjrgeheyknvhwkz'
      }
    });

    const mailOptions = {
      from: `"FutureTech Dynamics Bot" <madhav.unofficial28@gmail.com>`,
      to: 'madhav.unofficial28@gmail.com',
      replyTo: email,
      subject: `New Inquiry Submission: ${subject || fullName}`,
      text: `Hello Team,\n\nYou have received a new inquiry from ${fullName} (${email}) on FutureTech Dynamics website.\n\nPlease find the attached PDF report.\n\nBest Regards,\nFutureTech Dynamics Web Bot`,
      attachments: [
        {
          filename: `FutureTech_Inquiry_${fullName.replace(/\s+/g, '_')}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    };

    await transporter.sendMail(mailOptions);
    console.log('FutureTech PDF email sent successfully!');
    res.status(200).json({ success: true, message: 'Inquiry with PDF sent successfully!' });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Server error sending email.', error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`FutureTech Server running on http://localhost:${PORT}`));