const { MessageEmbed } = require("discord.js")
const discord = require("discord.js")
module.exports = {
  category: 'Info',
  description: 'Gets the definition from the urban dictionary of some text.', // Required for slash commands
  slash: true,
  testOnly: false, 
  options: [
    {
      name: 'term',
      description: 'The text to search for',
      required: true,
      type: 3,
    }
	],
  callback: async ({interaction }) => {

const args = interaction.options.getString('term');
const axios = require("axios")

axios.get(`https://api.urbandictionary.com/v0/define?term=${args}`).then(function (response) {
	if(args.length > "1500") return interaction.reply("Term too long")
	if(!response.data.list.length) return interaction.reply("No definition found for " + args + "!")
const e = new MessageEmbed()
.setTitle("Definition found!")
.addField("Definition", response.data.list[0].definition, 1)
.addField("Example", response.data.list[0].example, 1)
.setFooter(`👍 ${response.data.list[0].thumbs_up} 👎 ${response.data.list[0].thumbs_down}`)
interaction.reply({
	embeds: [e]
})

})
  },
}
	