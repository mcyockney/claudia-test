'use strict'

const rp = require('minimal-request-promise')
const botBuilder = require('claudia-bot-builder')
const fbTemplate = botBuilder.fbTemplate

function mainMenu() {
  return new fbTemplate.generic()
    .addBubble(`Sign It Signs - Southland`, 'Nobody beats our team')
      .addButton('Hours', 'HOURS')
      .addButton('Contact', 'CONTACT')
      .addButton('Website', 'https://www.groundspray.co.nz')
    .get()
}

const api = botBuilder((request, originalApiRequest) => {
  console.log(JSON.stringify(request))
  originalApiRequest.lambdaContext.callbackWaitsForEmptyEventLoop = false

  if (!request.postback)
    return rp.get(`https://graph.facebook.com/v2.6/${request.sender}?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token=${originalApiRequest.env.facebookAccessToken}`)
      .then(response => {
        const user = JSON.parse(response.body)
        return [
          `Hello ${user.first_name}. Welcome to Sign It Signs`,
          'What can I do for you today?',
          mainMenu()
        ]
      })

  if (request.text === 'HOURS')
        return [
          `We are open Monday to Friday, 9am-6pm`,
          `If you need it, we can even be open longer, but you'll have to be nice`,
          new fbTemplate.button('More actions:')
            .addButton('Back to start', 'MAIN_MENU')
            .get()
        ]
      
  if (request.text === 'CONTACT')
        return [
          `You can ask us here for help, or send us an email or phone us.`,
          new fbTemplate.button('More actions:')
            .addButton('Back to start', 'MAIN_MENU')
            .get()
        ]
      


  if (request.text === 'MAIN_MENU')
    return mainMenu()

})

api.addPostDeployConfig('nasaApiKey', 'NASA API Key:', 'configure-app');

module.exports = api