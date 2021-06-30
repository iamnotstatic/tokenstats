<div align="center">

## TokenStats 🚀🚀

A super simple and lightweight API to get crypto token live information.

[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-red.svg?style=flat)](http://makeapullrequest.com)

</div>

## APP URL

```bash
https://tokenstats.herokuapp.com/
```


### Quick Start
To get token live information

```bash
curl https://tokenstats.herokuapp.com/api/token?network=eth&pair=0xfcc3a312a65ffca5d54e61a7d0e6d95e98752345
```

## Response Codes

### Response Codes

```
200: Success
400: Bad request
401: Unauthorized
404: Cannot be found
405: Method not allowed
422: Unprocessable Entity
50X: Server Error
```

### Error Codes Details

```
100: Bad Request
110: Unauthorized
120: User Authenticaion Invalid
130: Parameter Error
140: Item Missing
150: Conflict
160: Server Error
```


### Networks allowed
```

eth - this is use for tokens on Ethereum 
bsc - this is use for tokens on Binance Smart Chain 

```


## Usage

The API uses the token pair address and network to get stats, you pass the pair and network as a query parameter to the above url

```json
GET /api/token/ HTTP/1.1
Accept: application/json
Content-Type: application/json

params {
    "network": "eth",
    "pair": "0xfcc3a312a65ffca5d54e61a7d0e6d95e98752345",
}
```

**Successful Response:**

```json
HTTP/1.1 200 Ok
Server: API
Content-Type: application/json

{
    "tokenName": "Token Name",
    "priceUSD": 0.03259909,
    "price": 0.03259909,
    "marketCapUSD": 1325990.92,
    "tokenToChain": 0.0001113,
    "chainToToken": 9199.33598129,
    "totalSupply": 20000000,
    "totalLiquidityUSD": 25412.3,
    "holders": 2930,
    "totalTx": 5662
}
```


# Author 💖

[Abdulfatai Suleiman](https://twitter.com/iamnotstatic)!

