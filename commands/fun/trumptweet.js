const { MessageAttachment } = require("discord.js")
const discord = require("discord.js")
module.exports = {
  category: 'Fun',
  description: 'Makes your text look like trump tweeted it', // Required for slash commands
  slash: true,
  testOnly: false, 
  options: [
    {
      name: 'text',
      description: 'The text to trumptweet',
      required: true,
      type: 3,
    }
	],
  callback: async ({interaction }) => {

const args = interaction.options.getString('text');
const axios = require("axios")

axios.get(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${args}`).then(function (response) {
const file = new MessageAttachment(response.data.message);
interaction.reply({
	files: [file]
})

})
  },
}
	