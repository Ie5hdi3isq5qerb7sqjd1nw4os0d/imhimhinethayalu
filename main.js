const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./auth.json`)
const events = require("./events")
const config = require('./config')
const { Message, Image, Video } = require('./alphaX/')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const path = require('path')

async function StartAlphaXmd() {

        const AlphaxSock = makeWASocket({
        logger: pino({
            level: 'debug'
        }),
        printQRInTerminal: true,
        browser: ['Alpha-X-Multi-Device', 'Web', 'v2'],
        auth: state
        });

    AlphaxSock.ev.on('messages.upsert', async msg => {
        console.log(JSON.stringify(msg, undefined, 2))
    })
}

StartAlphaXmd()