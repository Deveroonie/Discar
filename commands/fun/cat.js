const { MessageAttachment } = require("discord.js")
const discord = require("discord.js")
module.exports = {
  category: 'Fun',
  description: 'Get a random cat picture!', // Required for slash commands
  slash: true,
  testOnly: false, 
  callback: async ({interaction }) => {

const axios = require("axios")

axios.get(`https://aws.random.cat/meow`).then(function (response) {
const file = new MessageAttachment(response.data.file);
interaction.reply({
	files: [file]
})

})
  },
}
	