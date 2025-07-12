# Everflow Universal SDK Proxy

This is a Node.js-based proxy that allows you to load the Everflow SDK script from any Everflow tracking domain using a single endpoint.

## Usage

Deploy this service (e.g., to Render) and request the SDK like:

```
https://your-service.onrender.com/everflow.js?domain=tp88trk.com
```

This will proxy:

```
https://www.tp88trk.com/scripts/sdk/everflow.js
```

## How to Deploy

1. Push this code to a GitHub repo.
2. Deploy it to Render.com using:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Port: `3000`

Enjoy CSP-free Everflow SDK tracking!