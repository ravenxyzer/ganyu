import { Client, ExcludeEnum, Guild } from "discord.js";
import { ActivityTypes } from "discord.js/typings/enums";

export default (client: Client) => {
    const statusOptions = [
        {
            nameCustom: "Genshin Impact ID",
            typeCustom: 'WATCHING'
        },
        {
            nameCustom: `Travelers`,
            typeCustom: 'WATCHING'
        },
        {
            nameCustom: "Shenhe Wangy",
            typeCustom: 'WATCHING'
        },
        {
            nameCustom: "Prefix adalah 'g.'",
            typeCustom: "LISTENING"
        },
        {
            nameCustom: "@genshinimpact.giid",
            typeCustom: "WATCHING"
        },
        {
            nameCustom: "with Klee",
            typeCustom: "PLAYING"
        },
        {
            nameCustom: "discord.io/giid",
            typeCustom: "COMPETING"
        },
        {
            nameCustom: "giid.xyz",
            typeCustom: "WATCHING"
        }
    ]
    let counter = 0

    const updateStatus = () => {
        client.user?.setPresence({
            status: 'online',
            activities: [
                {
                    name: statusOptions[counter].nameCustom,
                    type: statusOptions[counter].typeCustom as ExcludeEnum<typeof ActivityTypes, 'CUSTOM'>
                }
            ]
        })
        
        if (++counter >= statusOptions.length) {
            counter = 0
        }

        setTimeout(updateStatus, 1000 * 5)
    }
    updateStatus()
}

export const config = {
    dbName: `STATUS_CHANGER`,
    displayName: 'Status Changer'
}
