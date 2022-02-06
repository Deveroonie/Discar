const { MessageAttachment } = require("discord.js")
const discord = require("discord.js")
module.exports = {
  category: 'Utility',
  description: 'Let everyone know you are AFK!', // Required for slash commands
  slash: true,
  testOnly: false, 
	 options: [
    {
      name: 'reason',
      description: 'Optional reason shown to users when they ping you.',
      required: false,
      type: 3,
    }
	],
  callback: async ({interaction }) => {
		const reason = interaction.options.getString('reason')
const redis = require('quickredis-db')
const db = redis.createClient(process.env.redis)

db.set(`${interaction.user.id}_afk`, "true")
if(reason) { db.set(`${interaction.user.id}_afkreason`, `${reason}`) }
interaction.reply({
	content: 'Okay!'
})


  },
}
	
