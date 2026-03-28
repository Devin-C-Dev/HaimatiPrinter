const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '.env.local'), quiet: true });
dotenv.config({ path: path.join(__dirname, '.env'), quiet: true });

const app = express();
const PORT = Number(process.env.PORT || 3001);
const STATIC_DIR = __dirname;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static(STATIC_DIR));

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    port: PORT,
    message: '拍立得相机服务运行中'
  });
});

app.listen(PORT, () => {
  console.log('');
  console.log('=================================');
  console.log('拍立得相机服务运行中');
  console.log(`Local URL: http://localhost:${PORT}`);
  console.log(`Health URL: http://localhost:${PORT}/api/health`);
  console.log('=================================');
  console.log('');
});
