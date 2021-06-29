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

parmas {
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
    "priceUSD": "$1.14031527",
    "price": "$1.14031527",
    "marketCapUSD": "$2,403,152.67",
    "tokenToChain": "0.00006565",
    "totalSupply": "20,000,000",
    "totalLiquidity": "$344,084.59",
    "holders": "1909",
    "chainToToken": "15827.35823119"
}
```


# Author 💖

[Abdulfatai Suleiman](https://twitter.com/iamnotstatic)!

