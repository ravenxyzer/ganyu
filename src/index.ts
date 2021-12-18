import DiscordJS, { Intents, Interaction } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_INVITES
    ]
})
client.on('messageCreate', message => {
    if (message.content.toLowerCase() === 'p') {
        message.reply('Mana salamnya! :rage:')
    }
})

client.on('ready', async () => {
    console.log(`Bot is ready`)

    // await mongoose.connect(process.env.MONGO_URI || '', {
    //     keepAlive: true,
    // })

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        typeScript: true,
        testServers: ['761550024131215430'],
        botOwners: ['387886389800337409'],
        // mongoUri: process.env.MONGO_URI
    })
    .setDefaultPrefix('ts.')
})

client.login(process.env.TEST)