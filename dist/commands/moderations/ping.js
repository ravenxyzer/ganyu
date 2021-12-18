"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'ping',
    aliases: ['p'],
    category: 'Testing',
    description: 'Replies with pong!',
    testOnly: true,
    callback: ({ client, message }) => {
        message.reply({
            content: `・ ✦ — Pong!\n> ・Latency is ${Date.now() - message.createdTimestamp}ms.\n> ・API Latency is ${Math.round(client.ws.ping)}ms.`
        });
    }
};
