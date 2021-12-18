import { Message } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    name: 'invites',
    aliases: ['invite', 'inv'],
    category: 'configuration',
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true, 

    callback: async ({ message }) => {
        message.reply({content: '> **Genshin Impact ID**  ✦  https://discord.gg/bSYrwa4Gjc'})
    }
} as ICommand