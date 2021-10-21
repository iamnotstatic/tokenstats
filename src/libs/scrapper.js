const puppeteer = require('puppeteer');

const ethScapper = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
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

    let price = document
      ?.querySelector('.pair-price')
      ?.textContent.replace('$', '')
      .replace(/,/g, '');

    let priceUSD = tokenInfo?.split(' ')[4].replace('$', '');
    let holders = tokenInfo.split(' ')[17];
    let totalLiquidityUSD = tokenInfo
      ?.split(' ')[11]
      ?.split(':')[1]
      .replace('Daily', '')
      .replace('$', '')
      .replace(/,/g, '');
    let marketCapUSD = tokenInfo
      ?.split(' ')[20]
      .replace('Diluted', '')
      .replace('$', '')
      .replace(/,/g, '');

    let totalTx = tokenInfo
      ?.split(' ')[16]
      .replace('Holders:', '')
      .replace(',', '')
      .replace(/,/g, '');

    let dailyVolume = tokenInfo
      ?.split(' ')[12]
      .replace(/volume:/g, '')
      .replace(/Pooled/g, '')
      .replace(/\$/g, '')
      .replace(/\,/g, '');

    let element = document.querySelector('.badge-info');
    element.click();
    let values = document?.querySelector('.modal-body')?.textContent;

    let chainToToken = values?.split(' ')[6].replace(/\,/g, '');
    let totalSupply = values?.split(' ')[12].replace(/\,/g, '');

    return {
      tokenName: tokenName.split('/')[1],
      priceUSD: parseFloat(priceUSD),
      price: parseFloat(price),
      marketCapUSD: parseFloat(marketCapUSD),
      dailyVolume: parseFloat(dailyVolume),
      totalSupply: parseFloat(totalSupply),
      totalLiquidityUSD: parseFloat(totalLiquidityUSD),
      holders: parseFloat(holders),
      totalTx: parseFloat(totalTx),
    };
  });

  await browser.close();

  return data;
};

const bscScrapper = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
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

    let price = document
      ?.querySelector('.pair-price')
      ?.textContent.replace('$', '')
      .replace(/,/g, '');

    let priceUSD = tokenInfo.split(' ')[3].replace('$', '');
    let holders = tokenInfo.split(' ')[18];
    let totalLiquidityUSD = tokenInfo
      .split(' ')[10]
      .split(':')[1]
      .replace('Daily', '')
      .replace('$', '')
      .replace(/,/g, '');
    let marketCapUSD = tokenInfo
      .split(' ')[21]
      .replace('Diluted', '')
      .replace('$', '')
      .replace(/,/g, '');

    let totalTx = tokenInfo
      .split(' ')[17]
      .replace('Holders:', '')
      .replace(',', '')
      .replace(/,/g, '');

    let dailyVolume = tokenInfo
      .split(' ')[12]
      .replace(/volume:/g, '')
      .replace(/Pooled/g, '')
      .replace(/\$/g, '')
      .replace(/\,/g, '');

    let element = document.querySelector('.badge-info');
    element.click();
    let values = document?.querySelector('.modal-body')?.textContent;

    let chainToToken = values?.split(' ')[6].replace(/\,/g, '');
    let totalSupply = values?.split(' ')[12].replace(/\,/g, '');

    return {
      tokenName: tokenName.split('/')[1],
      priceUSD: parseFloat(priceUSD),
      price: parseFloat(price),
      marketCapUSD: parseFloat(marketCapUSD),
      dailyVolume: parseFloat(dailyVolume),
      totalSupply: parseFloat(totalSupply),
      totalLiquidityUSD: parseFloat(totalLiquidityUSD),
      holders: parseFloat(holders),
      totalTx: parseFloat(totalTx),
    };
  });

  await browser.close();

  return data;
};

module.exports = { ethScapper, bscScrapper };
