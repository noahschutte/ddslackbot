# Slack Bot

## Local Development
- `mv example_config.js config.js`
- `npm i`
- `ngrok http 9647`
- `npm run dev`

## Slack Development Setup
- Create app
- Create custom slash command
  - Provide ngrok address
- Create bot user
- Obtain bot user access token
- update config.js
- Provide bot token scopes
  - im:write
  - mpim:write
  - chat:write
- Provide user token scopes
  - channels:write
  - groups:write
- Reinstall app
- provide config.js with userId

## Firebase Setup
- Create database
- provide keys in ./keys/dababase-keyfile.json
- update config.js

### Test
- `node testing.js`