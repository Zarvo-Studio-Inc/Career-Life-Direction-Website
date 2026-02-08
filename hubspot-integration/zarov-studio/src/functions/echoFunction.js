/**
 * Example HubSpot serverless function for demonstration.
 * This function can be used in HubSpot workflows or as a serverless endpoint.
 */

exports.main = async (event, callback) => {
  // Example: Echo back the input data
  const input = event.inputFields || {};
  callback({
    outputFields: {
      message: `Hello from HubSpot custom function! You sent: ${JSON.stringify(input)}`,
      timestamp: new Date().toISOString(),
    },
  });
};
