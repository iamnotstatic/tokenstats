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

    let price = document
      ?.querySelector('.pair-price')
      ?.textContent.replace('$', '')
      .replaceAll(',', '');

    let priceUSD = tokenInfo
      ?.split(' ')[2]
      .replace('$', '')
      .replaceAll(',', '');
    let tokenToChain = tokenInfo?.split(' ')[6].replaceAll(',', '');
    let holders = tokenInfo?.split(' ')[15];
    let totalLiquidityUSD = tokenInfo
      .split(' ')[9]
      .split(':')[1]
      .replace('Daily', '')
      .replace('$', '')
      .replaceAll(',', '');
    let marketCapUSD = tokenInfo
      ?.split(' ')[21]
      .replace('View', '')
      .replace('$', '')
      .replaceAll(',', '');

    let totalTx = tokenInfo
      ?.split(' ')[14]
      .replace('Holders:', '')
      .replaceAll(',', '');

    let element = document?.querySelector('.badge-info');
    element.click();
    let values = document?.querySelector('.modal-body')?.textContent;

    let chainToToken = values?.split(' ')[6].replaceAll(',', '');
    let totalSupply = values?.split(' ')[12].replaceAll(',', '');

    return {
      tokenName: tokenName.split('/')[1],
      priceUSD: parseFloat(priceUSD),
      price: parseFloat(price),
      marketCapUSD: parseFloat(marketCapUSD),
      tokenToChain: parseFloat(tokenToChain),
      chainToToken: parseFloat(chainToToken),
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

    let price = document
      ?.querySelector('.pair-price')
      ?.textContent.replace('$', '')
      .replaceAll(',', '');

    let priceUSD = tokenInfo
      ?.split(' ')[1]
      .replace('$', '')
      .replaceAll(',', '');
    let tokenToChain = tokenInfo?.split(' ')[5].replaceAll(',', '');
    let holders = tokenInfo?.split(' ')[14].replaceAll(',', '');
    let totalLiquidityUSD = tokenInfo
      .split(' ')[8]
      .split(':')[1]
      .replace('Daily', '')
      .replace('$', '')
      .replaceAll(',', '');
    let marketCapUSD = tokenInfo
      ?.split(' ')[20]
      .replace('View', '')
      .replace('$', '')
      .replaceAll(',', '');
    let totalTx = tokenInfo
      ?.split(' ')[13]
      .replace('Holders:', '')
      .replace(',', '')
      .replaceAll(',', '');

    let element = document.querySelector('.badge-info');
    element.click();
    let values = document?.querySelector('.modal-body')?.textContent;

    let chainToToken = values?.split(' ')[6].replaceAll(',', '');
    let totalSupply = values?.split(' ')[12].replaceAll(',', '');

    return {
      tokenName: tokenName.split('/')[1],
      priceUSD: parseFloat(priceUSD),
      price: parseFloat(price),
      marketCapUSD: parseFloat(marketCapUSD),
      tokenToChain: parseFloat(tokenToChain),
      chainToToken: parseFloat(chainToToken),
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
