// const { MessageEmbed, MessageComponentInteraction, MessageActionRow, MessageButton, MessageSelectMenu  } = require("discord.js")
// const discord = require("discord.js")
// module.exports = {
//   category: 'Info',
//   description: 'Get Info about every command of the bot.', // Required for slash commands
//   slash: true,
//   testOnly: true, 
//   callback: async ({interaction, channel }) => {

// const backId = 'back'
// const forwardId = 'forward'
// const backButton = new MessageButton({
//   style: 'SECONDARY',
//     emoji: '⬅️',
//   customId: backId
// })
// const forwardButton = new MessageButton({
//   style: 'SECONDARY',
//   emoji: '➡️',
//   customId: forwardId
// })

// const mainmenu = new MessageEmbed()
// .setTitle('Choose a Category')
// .setDescription('Please choose a category from below using the select menu for commands.')
// .setColor('RANDOM')

// const menu = new MessageActionRow()
// .addComponents(
//   new MessageSelectMenu()
//   .addOptions([
// 						{
// 							label: 'Information',
// 							description: 'The list of information commands',
// 							value: 'infoselecter',
// 						},
// 						{
// 							label: 'Fun',
// 							description: 'The list of fun commands of the bot.',
// 							value: 'funselecter',
// 						},
// 					]),
// )

// interaction.reply({
//   embeds: [mainmenu],
//   components: [menu]
// })

// // const collector = channel.createMessageComponentCollector({
// //   filter: ({user}) => user.id === author.id,
// //   time: 60000, can u check portcheck.js sir
// // })


// // collector.on('collect', async interaction => {


// // })

//   },
// }
	