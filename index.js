const Discord = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const Statcord = require("statcord.js");
const express = require("express")
const app = express()
const redis = require('quickredis-db')
const db = redis.createClient(process.env.redis)
const client = new Discord.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})
const statcord = new Statcord.Client({
    client,
    key: process.env.statcord,
    postCpuStatistics: true, 
    postMemStatistics: true, 
    postNetworkStatistics: false,
});
client.on('ready', () => {
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
		testServers: ['939537880169197568']

  })
	console.log("Info > Connected to the Discord API")
	    statcord.autopost();

})
app.get("/", (req, res) => {
	res.send("Hello \(200\)")
})
client.login(process.env.token)
app.listen("8080", () => {
	console.log("Info > Express up!")
})
