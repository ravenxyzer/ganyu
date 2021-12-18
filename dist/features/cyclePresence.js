"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = (client) => {
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
    ];
    let counter = 0;
    const updateStatus = () => {
        var _a;
        (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
            status: 'online',
            activities: [
                {
                    name: statusOptions[counter].nameCustom,
                    type: statusOptions[counter].typeCustom
                }
            ]
        });
        if (++counter >= statusOptions.length) {
            counter = 0;
        }
        setTimeout(updateStatus, 1000 * 5);
    };
    updateStatus();
};
exports.config = {
    dbName: `STATUS_CHANGER`,
    displayName: 'Status Changer'
};
