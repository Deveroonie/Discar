 const { MessageEmbed } = require("discord.js")
 const discord = require("discord.js")
 module.exports = {
   category: 'Info',
   description: 'Check if a port is open on an IP.', // Required for slash commands
   slash: true,
   testOnly: false, 
   options: [
     {
       name: 'ip',
       description: 'The ip to lookup.',
      required: true,
      type: 3,
    }, 
		{
			name: 'port',
			description: 'The port to check',
			required: true,
			type: 10
		}
	],
  callback: async ({interaction }) => {

const axios = require("axios")

const ip = interaction.options.getString('ip')
const port = interaction.options.getNumber('port') //this right? yes yae

axios.get(`https://api.openportcheck.net/check?ip=${ip}&port=${port}`).then(function (response) {
	var open = response.data.open

	if(open === "true") open = "open"
	if(open === "false") open = "closed"

	const e = new MessageEmbed()
	.setTitle("Portcheck complete")
	.setDescription(`Port ${port} is ${open} on IP ${ip}`)

	interaction.reply({
		embeds: [e]
	})
})
// fucking check discord
},
  }

	