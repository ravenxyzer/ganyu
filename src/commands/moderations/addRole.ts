import { Client, GuildMember, Interaction, MessageActionRow, MessageSelectMenu, MessageSelectOptionData, Role, TextChannel } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    name: 'addRole',
    category: 'configuration',
    description: 'Add a role to the auto role message.',
    
    minArgs: 3,
    maxArgs: 3,
    expectedArgs: '<channel> <messageId> <role>',
    expectedArgsTypes: ['CHANNEL', 'STRING', 'ROLE'],

    slash: 'both',
    testOnly: true,
    guildOnly: true,

    init: (client: Client) => {
        client.on('interactionCreate', interaction => {
            if(!interaction.isSelectMenu()) {
                return
            }

            const { customId, values, member } = interaction
            if(customId === 'auto_roles' && member instanceof GuildMember) {
                const components = interaction.component as MessageSelectMenu
                const removed = components.options.filter((option) => {
                    return !values.includes(option.value)
                })

                for (const id of removed) {
                    member.roles.remove(id.value)
                }

                for (const id of values) {
                    member.roles.add(id)
                }

                interaction.reply({
                    content: 'Roles diperbarui',
                    ephemeral: true
                })
            }
        })
    },

    callback: async ({ message, args, interaction, client }) => {  
        const channel = (
            message
            ? message.mentions.channels.first()
            : interaction.options.getChannel('channel')
        ) as TextChannel

        if(!channel || channel.type !== 'GUILD_TEXT') {
            return 'Mohon tentukan channel yang ingin dipilih!.'
        }

        const messageId = args[1]

        const role = message ? message.mentions.roles.first() : interaction.options.getRole('role') as Role
        if(!role) {
            return 'Role tidak diketahui.'
        }

        const targetMessage = await channel.messages.fetch(messageId, {
            cache: true,
            force: true
        })

        if(!targetMessage) {
            return 'MessageId tidak diketahui.'
        }

        if(targetMessage.author.id !== client.user?.id) {
            return `Mohon berikan messageId yang dikirim dari <@${client.user?.id}>`
        }

        let row = targetMessage.components[0] as MessageActionRow
        if(!row) {
            row = new MessageActionRow()
        }

        const option: MessageSelectOptionData[] = [
            {
            label: role.name,
            value: role.id
            },
        ]

        let menu = row.components[0] as MessageSelectMenu
        if(menu) {
            for (const o of menu.options) {
                if(o.value === option[0].value) {
                    return {
                        custom: true,
                        content: `<@&${o.value}> sudah bagian dari menu.`,
                        allowedMentions: {
                            roles: [],
                        },
                        ephemeral: true,
                    }
                }
            }

            menu.addOptions(option)
            menu.setMaxValues(menu.options.length)
        } else {
            row.addComponents(
                new MessageSelectMenu()
                    .setCustomId('auto_roles')
                    .setMinValues(0)
                    .setMaxValues(1)
                    .setPlaceholder('Tentukan role mu...')
                    .addOptions(option)
            )
        }

        targetMessage.edit({
            components: [row]
        })

        return {
            custom: true,
            content: `Menambahkan <@${role.id}> ke auto role menu.`,
            allowedMentions: {
                roles: []
            },
            ephemeral: true
        }
    },
} as ICommand
