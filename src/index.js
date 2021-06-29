const express = require('express');
const cors = require('cors');
const { ethScapper, bscScrapper } = require('./libs/scrapper');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: `Welcome to tokenStats`,
    desc: "It gives you live token info",
    documentation: `https://github.com/tokenstats`,
  });
});

app.get('/api/token', async (req, res, next) => {
  try {
    const { network, pair } = req.query;
    const url = `${process.env.DEXTOOLS_URL}${
      network === 'bsc' ? 'pancakeswap' : network === 'eth' ? 'uniswap' : null
    }/pair-explorer/${pair}`;

    if (network === 'eth') {
      const data = await ethScapper(url);
      return res.json(data);
    } else if (network === 'bsc') {
      const data = await bscScrapper(url);
      return res.json(data);
    } else {
      res.status(400).json({ message: 'invalid network', status: 'success' });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Something went wrong, try again later',
        status: 'failed',
      });
  }
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
