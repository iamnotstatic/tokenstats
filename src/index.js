const express = require('express');
const cors = require('cors');
const { ethScapper, bscScrapper } = require('./libs/scapper');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: `Welcome to tokenStats`,
    descript: 'Visit',
  });
});

app.get('/api/token/eth', async (req, res, next) => {
  try {
    const data = await bscScrapper(req.query.url);
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.get('/api/token/eth', async (req, res, next) => {
  try {
    const data = await ethScapper(req.query.url);
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
