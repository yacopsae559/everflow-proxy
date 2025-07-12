const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/everflow.js", async (req, res) => {
  const domain = req.query.domain;

  // Validate domain input to avoid abuse
  const isValid = /^[a-z0-9\-\.]+$/.test(domain);
  if (!domain || !isValid) {
    return res.status(400).send("// Invalid or missing domain parameter");
  }

  const sdkUrl = `https://www.${domain}/scripts/sdk/everflow.js`;

  try {
    const response = await fetch(sdkUrl);
    if (!response.ok) throw new Error("SDK not found");
    const js = await response.text();
    res.set("Content-Type", "application/javascript");
    res.send(js);
  } catch (err) {
    console.error("Failed to fetch SDK:", err);
    res.status(500).send(`// Failed to fetch SDK from ${sdkUrl}`);
  }
});

app.get("/", (req, res) => {
  res.send("Universal Everflow SDK Proxy. Use /everflow.js?domain=xxxtrk.com");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Universal proxy running on port ${port}`));