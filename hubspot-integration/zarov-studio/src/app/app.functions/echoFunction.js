const axios = require("axios");

exports.main = async context => {
  try {
    // Echo back the input (for demonstration)
    const input = context.body || {};
    return {
      statusCode: 200,
      body: {
        message: `Hello from HubSpot serverless function! You sent: ${JSON.stringify(input)}`,
        timestamp: new Date().toISOString(),
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: { error: error.message },
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
