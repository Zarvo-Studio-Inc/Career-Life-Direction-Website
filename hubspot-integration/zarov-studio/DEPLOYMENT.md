# Deploying and Testing Your HubSpot Project

## Deploy to HubSpot

1. Open a terminal in the `hubspot-integration/zarov-studio` directory.
2. Run:

   hs project upload

   This will deploy your project (including custom functions) to your connected HubSpot account.

## Start Local Development

1. In the same directory, run:

   hs project dev

   This will start a local development server for testing changes before deploying.

## Test Your Custom Function

- After deployment, you can use the HubSpot UI to add your function to a workflow, or call it from a custom code action.
- The example function `echoFunction.js` will echo back any input fields you provide.

## Resources
- [HubSpot Developer Docs](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/overview)
- [CLI Reference](https://developers.hubspot.com/docs/platform/cli)
