const puppeteer = require('puppeteer');

const ethScapper = async (url) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--incognito', '--no-sandbox', '--single-process', '--no-zygote'],
  });

  const page = await browser.newPage();

  await page.setUserAgent(
    '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
  );

  await page.goto(url, {
    waitUntil: 'networkidle0',
    timeout: 0,
  });

  const data = await page.evaluate(() => {
    let tokenInfo = document?.querySelector('.token-info-list')?.textContent;
    let tokenName = document?.querySelector('.erc-wallet').textContent;

    let price = document?.querySelector('.pair-price')?.textContent;

    let priceUSD = tokenInfo?.split(' ')[2];
    let tokenToChain = tokenInfo?.split(' ')[6];
    let holders = tokenInfo?.split(' ')[15];
    let totalLiquidity = tokenInfo
      .split(' ')[9]
      .split(':')[1]
      .replace('Daily', '');
    let marketCapUSD = tokenInfo?.split(' ')[19].replace('View', '');
    let totalTx = tokenInfo?.split(' ')[14].replace('Holders:', '');

    let element = document?.querySelector('.badge-info');
    element.click();
    let values = document?.querySelector('.modal-body')?.textContent;

    let chainToToken = values?.split(' ')[8];
    let totalSupply = values?.split(' ')[14];

    return {
      tokenName: tokenName.split('/')[1],
      priceUSD,
      price,
      marketCapUSD,
      tokenToChain,
      totalSupply,
      totalLiquidity,
      holders,
      totalTx,
      chainToToken,
    };
  });

  await browser.close();

  return data;
};

const bscScrapper = async (url) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--incognito', '--no-sandbox', '--single-process', '--no-zygote'],
  });

  const page = await browser.newPage();

  await page.setUserAgent(
    '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
  );

  await page.goto(url, {
    waitUntil: 'networkidle0',
    timeout: 0,
  });

  const data = await page.evaluate(() => {
    let tokenInfo = document?.querySelector('.token-info-list')?.textContent;
    let tokenName = document?.querySelector('.erc-wallet').textContent;

    let price = document?.querySelector('.pair-price')?.textContent;

    let priceUSD = tokenInfo?.split(' ')[1];
    let tokenToChain = tokenInfo?.split(' ')[5];
    let holders = tokenInfo?.split(' ')[14];
    let totalLiquidity = tokenInfo
      .split(' ')[8]
      .split(':')[1]
      .replace('Daily', '');
    let marketCapUSD = tokenInfo?.split(' ')[18].replace('View', '');
    let totalTx = tokenInfo?.split(' ')[13].replace('Holders:', '');

    let element = document.querySelector('.badge-info');
    element.click();
    let values = document?.querySelector('.modal-body')?.textContent;

    let chainToToken = values?.split(' ')[8];
    let totalSupply = values?.split(' ')[14];

    return {
      tokenName: tokenName.split('/')[1],
      priceUSD,
      price,
      marketCapUSD,
      tokenToChain,
      totalSupply,
      totalLiquidity,
      holders,
      totalTx,
      chainToToken,
    };
  });

  await browser.close();

  return data;
};

module.exports = { ethScapper, bscScrapper };
