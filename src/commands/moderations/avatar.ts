import { ICommand } from "wokcommands";
import { Message, MessageEmbed } from "discord.js";

export default {
    category: 'Avatar',
    aliases: ['avatar', 'av'],
    description: 'Sends an avatar',
    expectedArgs: '<target>',
    minArgs: 0,
    guildOnly: true,
    callback: async ({ message, text }) => {
        const user = message.mentions.users.first() || message.author
        const authId = user.id
        const authAv = user.avatar
        const embed = new MessageEmbed()
        .setDescription(`${user.username}'s Avatar`)
        .setImage('https://cdn.discordapp.com/avatars/' + authId + '/' + authAv + '?size=2048')
        .setColor('#ddc1b1')
        .setFooter(user.tag, user.displayAvatarURL({dynamic: true, size: 512}))
        return embed
    }
} as ICommand