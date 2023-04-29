const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const targetUrl = process.env.TARGET_URL;
  const corsUrl = "https://cors-anywhere.herokuapp.com/";
  const { path } = event;

  const response = await fetch(corsUrl + targetUrl + path);
  const data = await response.text();

  return {
    statusCode: 200,
    headers: {
      "content-type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    },
    body: data,
  };
};
