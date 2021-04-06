# playwith_restapi
This is a demo of using rest apis with Node.js for the back end and angular for the front end.
Best practices are followed by:
* storing api keys in a .env file 
* calling third party apis from the server to prevent CORS policy errors
This demo can also be used as a starter for an app using the MEAN stack.

## How to Install
1. Terminal 1: 
```
cd playwith_restapi_client 
npm i
```
2. Terminal 2:
```
cd playwith_restapi_server 
npm i
cd ..
```
3.  Create .env file with api keys
```
GIPHY_API_KEY = <Insert GIPHY_API_KEY>
NASA_API_KEY = <Insert NASA_API_KEY>
SETLISTFM_API_KEY = <Insert SETLISTFM_API_KEY>
```
API KEY | Sign up URL
--- | ---
GIPHY_API_KEY | https://developers.giphy.com/
NASA_API_KEY | https://api.nasa.gov/
SETLISTFM_API_KEY | https://api.setlist.fm/docs/1.0/index.html

4. Terminal 2:
```
node playwith_restapi_server 
```

5. Terminal 1:
```
ng serve
```



