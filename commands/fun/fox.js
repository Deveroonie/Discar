const { MessageAttachment } = require("discord.js")
const discord = require("discord.js")
module.exports = {
  category: 'Fun',
  description: 'Get a random fox picture!', // Required for slash commands
  slash: true,
  testOnly: false, 
  callback: async ({interaction }) => {

const axios = require("axios")

axios.get(`https://randomfox.ca/floof/`).then(function (response) {
const file = new MessageAttachment(response.data.image);
interaction.reply({
	files: [file]
})

})
  },
}
	