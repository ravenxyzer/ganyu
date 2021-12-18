"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    names: 'say',
    category: 'moderation',
    description: 'Sends what i say',
    minArgs: 1,
    expectedArgs: '<Kalimat>',
    expectedArgsTypes: ['STRING'],
    permissions: ['ADMINISTRATOR', 'MANAGE_MESSAGES'],
    testOnly: true,
    guildOnly: true,
    callback: ({ message, args, client }) => {
        message.delete();
        const say = message.content.slice(6).trim();
        message.channel.send(say);
    }
};
