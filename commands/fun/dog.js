const { MessageAttachment } = require("discord.js")
const discord = require("discord.js")
module.exports = {
  category: 'Fun',
  description: 'Get a random dog picture!', // Required for slash commands
  slash: true,
  testOnly: false, 
  callback: async ({interaction }) => {

const axios = require("axios")

axios.get(`https://dog.ceo/api/breeds/image/random`).then(function (response) {
const file = new MessageAttachment(response.data.message);
interaction.reply({
	files: [file]
})

})
  },
}
	