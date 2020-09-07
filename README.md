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
- Provide bot token scopes
  - im:write
  - mpim:write
  - chat:write
- Provide user token scopes
  - channels:write
  - groups:write
- Reinstall app

### Test
- `node testing.js`