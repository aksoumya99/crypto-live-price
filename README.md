# crypto-live-price
A mini website to track the live prices of 5 crypto coins, namely- BTC, ETH, USDT, BNB', SOL

Step 1: Clone the repository

Step 2: Run the following commands

```
cd crypto-live-price/backend
docker-compose up --build
```

Data can be fetched using Postman currently.

Example cURL-
```
curl --location 'localhost:3000/api/data/BTC'
```

The database is indexed for faster querying.

The Frontend code will be added incrementally in the upcoming days.

