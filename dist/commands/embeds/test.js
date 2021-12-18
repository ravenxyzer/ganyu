"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    name: 'test',
    aliases: ['mudaeRules', 'mr', 'me'],
    category: 'Embed',
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    init: (client, message, btnInt) => {
        client.on('clickButton', (button) => __awaiter(void 0, void 0, void 0, function* () {
            if (button.setCustomId === 'mudae_ping') {
                if (client.guilds.cache.has('913726789107458078')) {
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    member.roles.remove('913726789107458078');
                    message.reply({
                        content: 'Menghapus role Mudae Ping',
                    });
                }
                else {
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    member.roles.add('913726789107458078');
                    message.reply({
                        content: 'Menambahkan role Mudae Ping',
                    });
                }
            }
        }));
    },
    callback: ({ message, client, interaction: msgInt, channel, args }) => __awaiter(void 0, void 0, void 0, function* () {
        message.delete();
        const row = new discord_js_1.MessageActionRow()
            .addComponents(new discord_js_1.MessageButton()
            .setCustomId('mudae_ping')
            .setLabel('・Mudae Ping')
            .setStyle('SUCCESS')
            .setEmoji('🃏'));
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor('・ ✦ — GIID MUDAE REGULATIONS')
            .setColor('#FFA976')
            .setDescription('Berikut beberapa aturan yang wajib kalian taati ketika ingin main <@!432610292342587392> diantaranya:\n\n✧ 1. Setiap orang memiliki hak untuk claim husbu/waifu/kakera dari hasil gacha diri sendiri.\n\n✧ 2. Tidak diperboleh meng-claim husbu/waifu/kakera hasil gacha orang lain tanpa izin terlebih dahulu.\n\n✧ 3. Pergunakan channel sesuai dengan fungsinya.\n\n✧ 4. Kalian bisa mention <@&910516787030929478> untuk keperluan yang dibutuhkan misalnya free waifu/husbu/kakera dan lain sebagainya.\n\n✧ 5. Aturan bersifat komprehensif dan dapat berubah tanpa pemberitahuan terlebih dahulu.\n\nSilahkan pilih menu di bawah untuk mendapatkan role <@&910516787030929478>');
        // .setFields()
        // .setFooter()
        yield message.channel.send({
            embeds: [embed],
            components: [row]
        });
    })
};
