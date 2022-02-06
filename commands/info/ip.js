const { MessageEmbed } = require("discord.js")
const discord = require("discord.js")
module.exports = {
  category: 'Info',
  description: 'Get info from an IP.', // Required for slash commands
  slash: true,
  testOnly: false, 
  options: [
    {
      name: 'ip',
      description: 'The ip to lookup.',
      required: true,
      type: 3,
    }
	],
  callback: async ({interaction }) => {

const args = interaction.options.getString('ip');
const axios = require("axios")

const ip = interaction.options.getString('ip')
        axios.get(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,timezone,isp,as,mobile,proxy,hosting,query`) .then(function (response) {
            if (response.data.message) return interaction.reply(`An error occoured, error: ${response.data.message}`)
            const e = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${response.data.query} - IP info`)
            .setDescription(`Country: ${response.data.countryCode}/${response.data.country}\nRegion: ${response.data.regionName}, ${response.data.city}\nTimezone: ${response.data.timezone}\nISP: ${response.data.isp}\nASN: ${response.data.as}\nProxy: ${response.data.proxy}\nCellular: ${response.data.mobile}\nData center: ${response.data.hosting}`)
            interaction.reply({embeds: [e]})

})
  },
}
	