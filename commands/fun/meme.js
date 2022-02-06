const { MessageEmbed } = require("discord.js")
const discord = require("discord.js")
module.exports = {
  category: 'Fun',
  description: 'Get a meme from reddit', // Required for slash commands
  slash: true,
  testOnly: false, 
  callback: async ({interaction }) => {

const axios = require("axios")

axios.get(`https://meme-api.herokuapp.com/gimme`).then(function (response) {
	if(response.data.nsfw !== false) return interaction.reply(":x: Meme blocked!\nSorry, but the meme I got was flagged as NSFW and I am not allowed to send it.")
const e = new MessageEmbed()
.setTitle(response.data.title) 
.setImage(response.data.url)

interaction.reply({
	embeds: [e]
})
})
  },
}
	