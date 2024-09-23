/*
   Created By ArxzyDev
   My Contact wa.me/6289513081052
   Rxzy-MD V1.1.0
*/
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const { randomBytes } = require('crypto')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    tanggal,
    jam,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    totalcase
} = require('./lib/myfunc')
/* ~~~~~~~~~ FUNTION SYSTEM ~~~~~~~~~ */
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun');
const {
	addOwnerUser,
	getOwnerExpired,
	getOwnerPosition,
	expiredOwnerCheck,
	checkOwnerUser,
	getAllOwnerUser,
} = require('./lib/owner');
/* ~~~~~~~~~ DATA GAME ~~~~~~~~~ */
let _family100 = global.db.data.game.family100 = []
let tebaklagu = global.db.data.game.tebaklagu = []
let kuismath = global.db.data.game.kuismath = []
let tebakgambar = global.db.data.game.tebalgambar = []
let tebakkata = global.db.data.game.tebakkata = []
let tebakkalimat = global.db.data.game.tebakkalimat = []
let tebaklirik = global.db.data.game.tebaklirik = []
let tebaktebakan = global.db.data.game.tebaktebakan = []
let tebakbendera = global.db.data.game.tebakbendera = []
let tebakbendera2 = global.db.data.game.tebakbendera2 = []
let tebakkabupaten = global.db.data.game.tebakkabupaten = []
let tebakkimia = global.db.data.game.tebakkimia = []
let tebakasahotak = global.db.data.game.tebakasahotak = []
let tebaksiapakahaku = global.db.data.game.tebaksiapakahaku = []
let tebaksusunkata = global.db.data.game.tebaksusunkata = []
let tebaktekateki = global.db.data.game.tebaktekateki = []
let akinator = global.db.data.game.akinator = []
/* ~~~~~~~~~ DATA ~~~~~~~~~ */
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
/* ~~~~~~~~~ DATA MEDIA ~~~~~~~~~ */
const VnArxzy = JSON.parse(fs.readFileSync('./src/media/vn.json'))
const StickerArxzy = JSON.parse(fs.readFileSync('./src/media/sticker.json'))
const ImageArxzy = JSON.parse(fs.readFileSync('./src/media/image.json'))
const VideoArxzy = JSON.parse(fs.readFileSync('./src/media/video.json'))
/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */

moment.tz.setDefault("Asia/Jakarta").locale("id")

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (waktu < "23:59:00") {
    var ucapanWaktu = 'Selamat Malam'
}
if (waktu < "19:00:00") {
    var ucapanWaktu = 'Selamat Petang'
}
if (waktu < "18:00:00") {
    var ucapanWaktu = 'Selamat Sore'
}
if (waktu < "15:00:00") {
    var ucapanWaktu = 'Selamat Siang'
}
if (waktu < "10:00:00") {
    var ucapanWaktu = 'Selamat Pagi'
}
if (waktu < "05:00:00") {
    var ucapanWaktu = 'Selamat Subuh'
}
if (waktu < "03:00:00") {
    var ucapanWaktu = 'Selamat Tengah Malam'
}
/* ~~~~~~~~~ SCRIPT & FUNCTION  ~~~~~~~~~ */
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
/* ~~~~~~~~~ STARTING & MODULE ALL ~~~~~~~~~ */
module.exports = arxzy = async (arxzy, m, msg, chatUpdate, store) => {
    try {
        /* ~~~~~~~~~ BASE ARXZYDEV ~~~~~~~~~ */
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectnewReply.selectedRowId : (m.mtype == 'templateButtonnewReplyMessage') ? m.message.templateButtonnewReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectnewReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa
        const isCmd = body.startsWith(prefix, '')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await arxzy.decodeJid(arxzy.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        /* ~~~~~~~~~ MEDIA ALL ~~~~~~~~~ */
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        /* ~~~~~~~~~ PREFIX V2 ~~~~~~~~~ */
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
        const isAsu = body.startsWith(pric)
        const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
        const isAdrian = ('6289513081052@s.whatsapp.net').includes(m.sender)
        /* ~~~~~~~~~ GROUP SYSTEM ~~~~~~~~~ */
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await arxzy.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        /* ~~~~~~~~~ STATUS USERS ~~~~~~~~~ */
        const isCreator = [numberowner, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || checkPremiumUser(m.sender, premium);
        expiredPremiumCheck(arxzy, m, premium);
        expiredOwnerCheck(arxzy, m, _owner);
        /* ~~~~~~~~~ REPLY ~~~~~~~~~ */
        async function newReply(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                arxzy.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: jam(),
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./media/quoted.jpg'),
                            sourceUrl: global.link
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === '3') {
               arxzy.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: namabot,
                        body: `Bot Created By Queen Elisa Bot`,
                        thumbnail: fs.readFileSync('./media/menu.jpg'),
                        sourceUrl: global.link,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            }
        }
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": namabot,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
        
        /* ~~~~~~~~~ Global Database ~~~~~~~~~ */
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 5
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = arxzy.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: arxzy.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('autosimi' in chats)) chats.autosimi = false
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('notification' in chats)) chats.notification = {}
               } else global.db.data.chats[from] = {
                  autosimi: false,
                  badword: false,
                  antilink: false,
                  antilinkgc: false,
                  notification: {
                     status: false,
                     text_left: '',
                     text_welcome:''
                  }
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('typemenu' in setting)) setting.typemenu = global.typemenu
               if (!('typereply' in setting)) setting.typereply = global.typereply
               if (!('autobio' in setting)) setting.autobio = global.autobio 
               if (!('autoread' in setting)) setting.autoread = global.autoread
               if (!('autoblok212' in setting)) setting.autoblok212 = global.autoblok212
               if (!('onlyindo' in setting)) setting.onlyindo = global.onlyindo
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: arxzy.getName(botNumber), alias: global.namabot}, owner: { nick: arxzy.getName(global.numberowner + '@s.whatsapp.net'), alias: global.numberowner}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               typemenu: global.typemenu,
               typereply: global.typereply,
               autobio: global.autobio,
               autoread: global.autoread,
               autoblock212: global.autoblock212,
               onlyindo: global.onlyindo,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: arxzy.getName(botNumber), 
                     alias: global.namabot
                  },
                  owner: {
                     nick: arxzy.getName(global.numberowner + '@s.whatsapp.net'), 
                     alias: global.numberowner
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
        /* ~~~~~~~~~ ALL SYSTEM BOT ~~~~~~~~~ */
        async function useLimit(sender, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            newReply(`Limit Anda Telah Digunakan Sebanyak ${amount} Dari ${db.data.users[sender].limit} Limit Kamu`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitnya = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitnya
            }
            arxzy.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !isCreator && global.onlygrub ) {
            return newReply("Halo Kak, Karna Kami Ingin Mengurangi Spam Silahkan Gunakan Bot Di Group !\n\nJika Ada Kepentingan Bersama Owner Silahkan Ketik .owner")
        }
        // Private Only
        if (!isCreator && global.onlypc && m.isGroup) {
	         return newReply("Halo Kak, Jika Mau Gunakan Bot Ini Silahkan Chat Ke Pribadi Bot")
	     }
	     
        if (!arxzy.public) {
            if (isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            arxzy.readMessages([m.key])
        }
        if (autobio) {
            arxzy.updateProfileStatus(`-`).catch(_ => _)
        }
        if (chatUpdate['messages.upsert']) {
            const upsert = chatUpdate['messages.upsert']
            for (let msg of upsert.messages) {
                if (msg.key.remoteJid == 'status@broadcast' && !msg.key.fromMe && !msg.message?.protocolMessage) {
                    console.log(`Lihat status ${msg.pushName} ${msg.key.participant.split('@')[0]}\n`)
                    arxzy.readMessages([msg.key])
                }
            }
        }
        if (isCommand) {
            let titida = ['composing', 'recording']
            yte = titida[Math.floor(titida.length * Math.random())]
            arxzy.sendPresenceUpdate(yte, from)
        }
        if (m.sender.startsWith('212') && global.autoblok212 === true) {
            return arxzy.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && global.onlyindo === true) {
            return arxzy.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
            list.push({
                displayName: arxzy.getName(i + '@s.whatsapp.net'),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${arxzy.getName(i + '@s.whatsapp.net')}\nFN:${arxzy.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:creator@queenelisa\nitem2.X-ABLabel:Email\nitem3.URL:https://youtube.com/@queenelisabot\nitem3.X-ABLabel:Rest APIs\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            })
        }
        /* ~~~~~~~~~ CONSOLE ~~~~~~~~~ */
        if (isCommand) {
            console.log(`<================>`)
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '<\> MESSAGE </>' : '<\> COMMAND </>')), chalk.black(chalk.bgGreen(hariini)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            console.log(`<================>`)
            // global.db.data.settings[botNumber].totalhit += 1
        }
        /* ~~~~~~~~~ RESPON ~~~~~~~~~ */
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  if (baduser < 5) return newReply('Anda Telah Dikarena Berkata Kasar')
                  await arxzy.sendMessage(from, { delete: m.key })
               }
            }
        }
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               newReply(`apalah?, kirim kirim link gc`)
               if (!isBotAdmins) return newReply(botAdmin)
               if (isAdmins) return newReply(`sory adminn`)
               if (isCreator) return newReply(`kamu owner ku 🥰`)
               arxzy.sendMessage(from, { delete: m.key })
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               newReply(`apalah?, kirim link gak jelas`)
               if (!isBotAdmins) return newReply(botAdmin)
               if (isAdmins) return newReply(`sory adminn`)
               if (isCreator) return newReply(`kamu owner ku 🥰`)
               arxzy.sendMessage(from, { delete: m.key })
            }
        }
        
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            newReply(`Mohon Jangan Tag Dia\nDia Sedang AFK ${reason ? 'Dengan Alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            newReply(`Kamu Telah Kembali Dari AFK ${user.afkReason ? ' Setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        /* ~~~~~~~~~ FUNCTION WELCOME AND LEFT ~~~~~~~~~ */
        if (db.data.chats[from].notification.status) {
            arxzy.ev.on('group-participants.update', async (anu) => {
               try {
                  let metadata = await arxzy.groupMetadata(anu.id)
                  let par = anu.participants
                  for (let i of par) {
                     let ppuser = await arxzy.profilePictureUrl(i, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                     if (anu.action == 'add') {
                        await arxzy.sendMessage(m.chat, {text: db.data.group[from].notification.text_welcome ? db.data.group[from].notification.text_welcome : Styles(`Welcome To ${metadata.subject}`), contextInfo: { externalAdReply: { showAdAttribution: true, title: Styles(`Welcome To ${metadata.subject} | ${arxzy.getName(i)}`), body: '', thumbnailUrl: 'https://telegra.ph/file/4a38ee1a1214456282f78.jpg', sourceUrl: global.link, mediaType: 1, renderLargerThumbnail: false }}})
                     } else if (anu.action == 'remove') {
                        await arxzy.sendMessage(m.chat, {text: db.data.group[from].notification.text_left ? db.data.group[from].notification.text_left : Styles(`Selamat Tinggal ${arxzy.getName(i)}`), contextInfo: { externalAdReply: { showAdAttribution: true, title: Styles(`Selamat Tinggal ${arxzy.getName(i)}`), body: '', thumbnailUrl: 'https://telegra.ph/file/4a38ee1a1214456282f78.jpg', sourceUrl: global.link, mediaType: 1, renderLargerThumbnail: false }}})
                     }
                  }
               } catch (err) {
                  console.log(err)
               }
            })
        }
        /* ~~~~~~~~~ RESPON DATA MEDIA ~~~~~~~~~ */
        for (let Mwuhehe of VnArxzy) {
            if (budy === Mwuhehe) {
                let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`)
                arxzy.sendMessage(m.chat, {
                    audio: audiobuffy,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of StickerArxzy) {
            if (budy === Mwuhehe) {
                let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`)
                arxzy.sendMessage(m.chat, {
                    sticker: stickerbuffy
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of ImageArxzy) {
            if (budy === Mwuhehe) {
                let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`)
                arxzy.sendMessage(m.chat, {
                    image: imagebuffy
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of VideoArxzy) {
            if (budy === Mwuhehe) {
                let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`)
                arxzy.sendMessage(m.chat, {
                    video: videobuffy
                }, {
                    quoted: m
                })
            }
        }
        /* ~~~~~~~~~ RESPON CMD GAME~~~~~~~~~ */
        if (('family100' + m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100' + m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\n\n`
            caption += `Terdapat ${room.jawaban.length}\n`
            caption += `Jawaban ${room.jawaban.find(v => v.includes(' ')) ? '(beberapa Jawaban Terdapat Spasi)' : ''}\n`
            caption += `${isWin ? 'Semua Jawaban Terjawab' : isSurender ? 'Menyerah!' : ''}\n`
            caption += `${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}${isSurender ? '' : `Perfect Player`}`.trim()
            arxzy.sendText(m.chat, caption, m, {
                contextInfo: {
                    mentionedJid: parseMention(caption)
                }
            }).then(mes => {
                return _family100['family100' + m.chat].pesan = mesg
            }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100' + m.chat]
        }
        if (akinator.hasOwnProperty(m.sender.split('@')[0]) && isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
            kuis = true
            var {
                server,
                frontaddr,
                session,
                signature,
                question,
                step
            } = akinator[m.sender.split('@')[0]]
            if (step == "0" && budy == "5") newReply("Maaf Anda telah mencapai pertanyaan pertama")
            var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
            var get_result = await fetchJson(ini_url)
            var get_result = get_result.result
            if (get_result.hasOwnProperty("name")) {
                var ini_name = get_result.name
                var description = get_result.description
                ini_txt = `${ini_name} - ${description}\n\n`
                ini_txt += "*Terima Kasih*\n*Powered By ArxzyDev & LoL Human*"
                await arxzy.sendMessage(m.chat, {
                    image: {
                        url: get_result.image
                    },
                    caption: ini_txt
                }).then(() => {
                    delete akinator[m.sender.split('@')[0]]
                    fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                })
                return
            }
            var {
                question,
                _,
                step
            } = get_result
            ini_txt = `${question}\n\n`
            ini_txt += "0 - Ya\n"
            ini_txt += "1 - Tidak\n"
            ini_txt += "2 - Saya Tidak Tau\n"
            ini_txt += "3 - Mungkin\n"
            ini_txt += "4 - Mungkin Tidak\n"
            ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
            if (args[0] === '5') {
                var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                var {
                    question,
                    _,
                    step
                } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
            }
            arxzy.sendText(m.chat, ini_txt, m).then(() => {
                const data_ = akinator[m.sender.split('@')[0]]
                data_["question"] = question
                data_["step"] = step
                akinator[m.sender.split('@')[0]] = data_
                fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
            })
        }
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakgambar[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete kuismath[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await newReply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakasahotak[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera2[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkimia[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaktekateki[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktekateki[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaklagu[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkalimat[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaklirik[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaktebakan[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await arxzy.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // newReply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                newReply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['', ''][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
: @${room.game.playerX.split('@')[0]}
: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) arxzy.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            arxzy.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        switch (isCommand) {
            case 'addbadword': case 'addbd':
               if (!isCreator) return newReply(mess.owner)
               if (!groupAdmins) return newReply(mess.admin)
               if (args.length < 1) return newReply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
               bad.push(v)
               fs.writeFileSync('./src/badword.json', JSON.stringify(bad))
               newReply('Success Menambahkan Bad Word!')
            break
            case 'delbadword': case 'deldb':
               if (!isCreator) return newReply(mess.owner)
               if (!groupAdmins) return newReply(mess.admin)
               if (args.length < 1) return newReply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)                 
               bad.splice(v)
               fs.writeFileSync('./src/badword.json', JSON.stringify(bad))
               newReply('Success Menghapus BAD WORD!')
            break 
            case 'resetuser':
            case 'resetdbuser': {
               if (!isCreator) return newReply(mess.owner)
               let totalusernya = db.data.users[0].length
               newReply(`Sukses Menghapus ${totalusernya} User Di Database`)
               db.data.users = []
            }
            break
            case 'resethit':
            case 'resettotalhit': {
               if (!isCreator) return newReply(mess.owner)
               global.db.data.settings[botNumber].totalhit = 0
               newReply(mess.done)
            }
            break
            case 'setmenu':{
               if (!isCreator) return newReply(mess.owner)
               if (!text) return newReply('setmenu ada 5 tampilan')
               if (text.startsWith('v')) {
                  typemenu = text
                  newReply(mess.done)
               } else {
                  newReply(`${text} tidak ada ditype menu!`)
               }
            }
            break
            case 'setreply':
            case 'setreplay': {
               if (!isAdrian) return newReply(mess.owner)
               if (!text) return newReply(`${command} ada 3 tampilan`)
               if (text.startsWith('v')) {
                  typereply = text
                  newReply(mess.done)
               } else {
                  newReply(`${text} tidak ada ditypereplay!`)
               }
            }
            break
            case 'statustext': 
            case 'upswteks': {
               if (!isAdrian) return newReply(mess.owner)
               if (!q) return newReply('Teks?')
               await arxzy.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               newReply(mess.done)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!isAdrian) return newReply(mess.owner)
               if (/video/.test(mime)) {
                  var videosw = await arxzy.downloadAndSaveMediaMessage(quoted)
                  await arxzy.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await newReply(mess.done)
               } else {
                  newReply('Command Salah!, Ini Khusus Up Sw Video')
               }
            }
            break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!isAdrian) return newReply(mess.owner)
               if (/image/.test(mime)) {
                  var imagesw = await arxzy.downloadAndSaveMediaMessage(quoted)
                  await arxzy.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await newReply(mess.done)
               } else {
                  newReply('command salah!, ini khusus Up Sw Foto')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!isAdrian) return newReply(mess.owner)
               if (/audio/.test(mime)) {
                  var audiosw = await arxzy.downloadAndSaveMediaMessage(quoted)
                  await arxzy.sendMessage('status@broadcast', {
                     audio: {
                        url: VnSw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await newReply(mess.done)
               } else {
                  newReply('command salah!, Khusus Up Sw Audio')
               }
            }
            break
            case 'setimgqouted':
            case 'siq': {
                if (!isAdrian) return newReply(mess.owner)
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/quoted.jpg')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'setimgmenu':
            case 'sim': {
                if (!isAdrian) return newReply(mess.owner)
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/menu.jpg')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'setvidmenu':
            case 'svm': {
                if (!isAdrian) return newReply(mess.owner)
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/menu.mp4')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'addtitle':
            case 'kasihtitle': {
               if (!isCreator) return newReply(mess.owner)
               if (!text) return newReply(`Masukan Nomer,Titlenya`)
               nonya = text.split(',')[0]
               titlenya = text.split(',')[1]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = titlenya
               await newReply(mess.done)
            }
            break
            case 'deltitle':
            case 'hapustitle': {
               if (!isCreator) return newReply(mess.owner)
               if (!text) return newReply(`Masukan Nomernya`)
               nonya = text.split(',')[0]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = ''
               await newReply(mess.done)
            }
            break
            case 'addlimit':
            case 'kasihlimit':
            case 'givelimit':{
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Masukkan Nomer|JumlahLimit`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                db.data.users[oo].limit += limitnya
                newReply(mess.done)
            }
            break
            case 'dellimit':
            case 'hapuslimit': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Masukkan Nomer|JumlahLimit`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return newReply(`Limit Dia Kurang Dari ${limitnya}`)
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                newReply(mess.done)
            }
            break
            case 'addprem':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 2)
                    return newReply(`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    newReply("Sukses Premium")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    newReply("Sukses Via Nomer")
                }
            break
            case 'delprem':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium));
                    }
                    newReply("Sukses Delete")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium));
                    newReply("Sukses Via Nomer")
                }
            break
            case 'listprem': {
                if (!isCreator) return newReply(mess.owner)
                let data = require("./src/data/role/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Nomer : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`
                }
                arxzy.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'addowner':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 2)
                    return newReply(`Penggunaan :\n*#addowner* @tag waktu\n*#addowner* nomor waktu\n\nContoh : #addowner @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addOwnerUser(m.mentionedJid[0], args[1], _owner);
                    }
                    newReply("Sukses Owner")
                } else {
                    addOwnerUser(args[0] + "@s.whatsapp.net", args[1], _owner);
                    newReply("Sukses Via Nomer")
                }
            break
            case 'delowner':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        _owner.splice(getOwnerPosition(m.mentionedJid[i], _owner), 1);
                        fs.writeFileSync("./src/data/role/owner.json", JSON.stringify(_owner));
                    }
                    newReply("Sukses Delete")
                } else {
                    _owner.splice(getOwnerPosition(args[0] + "@s.whatsapp.net", _owner), 1);
                    fs.writeFileSync("./src/data/role/owner.json", JSON.stringify(_owner));
                    newReply("Sukses Via Nomer")
                }
            break
            case 'listowner': {
                if (!isCreator) return newReply(mess.owner)
                let data = require("./src/data/role/owner.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Nomer : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`
                }
                arxzy.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'delsesi':
            case 'clearsession': {
                if (!isCreator) return newReply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return newReply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
                    if (filteredArray.length == 0) return newReply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    newReply(teks)
                    await sleep(2000)
                    newReply("Menghapus file sampah...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    newReply("Berhasil menghapus semua sampah di folder session")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return newReply(mess.owner)
                    if (!text) return newReply('Masukkan Link Group!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link Invalid!')
                    newReply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await arxzy.groupAcceptInvite(result).then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                } catch {
                    newReply('Gagal Masuk Ke Group')
                }
                break
            case 'cekapikey':
                if (!isCreator) return newReply(mess.owner)
                let g = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lol}`)
                newReply(q.result)
            break
            case 'ambilsesi':
            case 'getsesi':
                if (!isCreator) return newReply(mess.owner)
                newReply('Tunggu Sebentar, Sedang mengambil file sesi mu')
                let sesi = fs.readFileSync('./session/creds.json')
                arxzy.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
            case 'myip':
            case 'ipbot':
                if (!isCreator) return newReply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        newReply("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'shutdown':
                if (!isCreator) return newReply(mess.owner)
                newReply(`Otsukaresama deshita🖐`)
                await sleep(3000)
                process.exit()
            break
            case 'restart':
                if (!isCreator) return newReply(mess.owner)
                newReply('Proses....')
                exec('pm2 restart all')
            break
            case 'autoread':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    newReply(`Berhasil mengubah autoread ke ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    newReply(`Berhasil mengubah autoread ke ${q}`)
                }
            break
            case 'autobio':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
                }
            break
            case 'mode':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    arxzy.public = true
                    newReply(mess.done)
                } else if (q == 'self') {
                    arxzy.public = false
                    newReply(mess.done)
                }
            break
            case 'setexif':
            case 'setwm':
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Contoh : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                newReply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return newReply(mess.owner)
                if (!quoted) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                var medis = await arxzy.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await arxzy.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                } else {
                    var memeg = await arxzy.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return newReply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await arxzy.updateBlockStatus(blockw, 'block').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
            break
            case 'unblock':
                if (!isCreator) return newReply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await arxzy.updateBlockStatus(blockww, 'unblock').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
            break
            case 'leave':
            case 'out':
                if (!isCreator) return newReply(mess.owner)
                if (!m.isGroup) return newReply(mess.group)
                newReply('Dadah Semuanya 🥺')
                await arxzy.groupLeave(m.chat)
            break
            case 'backup':
                if (!isCreator) return newReply(mess.owner)
                if (m.isGroup) return newReply(mess.private)
                newReply(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await arxzy.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
            break
            case 'bc':
            case 'broadcast': {
               if (!isCreator) return newReply(mess.owner)
               if (!text) return newReply('teks?')
               let teksnya = `${text}\n\n\n\nDate: ${hariini} / ${wib}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await arxzy.sendMessage(i, { 
                        image: {
                           url: bcimg
                        },
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await qouted.download()
                     await arxzy.sendMessage(i, {
                        video: {
                           url: media
                        },
                        caption: teksnya
                     })
                  } else if (text) {
                     await arxzy.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               newReply(`Sukses ${command} Ke ${Object.keys(global.db.data.users).length} User`)
            }
            break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Text mana?\n\nContoh : ${prefix + command} Besok Libur `)
                let getGroups = await arxzy.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    arxzy.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Telah Terkirim ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'getcase':
            case 'ambilcase':
                if (!isCreator) return newReply(mess.owner)
                try {
                   const getCase = (cases) => {
                      return "case" + `'${cases}'` + fs.readFileSync("arxzy.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                   }
                   newReply(`${getCase(q)}`)
                } catch {
                  newReply(`case ${q} tidak ditemukan!`)
                }
            break
            case 'addcase': {
               if (!isCreator) return newReply(mess.OnlyOwner);
               if (!text) return newReply('Contoh:\n.addcase case \'tes\':\nnewReply(\'berhasil\')\nbreak');
               if (!text.includes("case '")) return newReply("😔 case nya harus gini case '");
               let code = fs.readFileSync('arxzy.js', 'utf8');
               let indexSwitchCommand = code.indexOf('// Created By ArxzyDev');
               if (indexSwitchCommand !== -1) {
                  const newCase = `${text}\n\n\n\n\n`;
                  code = code.slice(0, indexSwitchCommand + 20) + divider + newCase + code.slice(indexSwitchCommand + 20);
                  fs.writeFileSync('arxzy.js', code);
                  newReply(mess.done);
               } else {
                  newReply(mess.error);
               }
            }
            break
            /* ~~~~~~~~~ GROUP FEATURES ~~~~~~~~~ */
            case 'nobad':
            case 'badword':
		         if (!groupAdmins && !isCreator) return newReply(mess.admin)
               if (args.length < 1) return newReply('enable/disable?')
               if (args[0] === 'enable') {
                  db.data.chats[from].badword = true
                  newReply(`badword is enable`)
               } else if (args[0] === 'disable') {
                  db.data.chats[from].badword = false
                  newReply(`badword is disable`)
               }
            break
            case 'autosimi': {
               if (!groupAdmins && !isCreator) return newReply(mess.admin)
               if (args.length < 1) return newReply('enable/disable?')
               if (args[0] === 'enable') {
                  db.data.chats[from].autosimi = true
                  newReply(`autosimi is enable`)
               } else if (args[0] === 'disable') {
                  db.data.chats[from].autosimi = false
                  newReply(`autosimi is disable`)
               }
            }
            break
            case 'antilink': {
               if (!groupAdmins && !isCreator) return newReply(mess.admin)
               if (args.length < 1) return newReply('enable/disable?')
               if (args[0] === 'enable') {
                  db.data.chats[from].antilink = true
                  newReply(`${command} is enable`)
               } else if (args[0] === 'disable') {
                  db.data.chats[from].antilink = false
                  newReply(`${command} is disable`)
               }
            }
            break
            case 'antilinkgc': {
               if (!groupAdmins && !isCreator) return newReply(mess.admin)
               if (args.length < 1) return newReply('enable/disable?')
               if (args[0] === 'enable') {
                  db.data.chats[from].antilinkgc = true
                  newReply(`${command} is enable`)
               } else if (args[0] === 'disable') {
                  db.data.chats[from].antilinkgc = false
                  newReply(`${command} is disable`)
               }
            }
            break
            case 'welcome':
            case 'left': {
               if (!groupAdmins && !isCreator) return newReply(mess.admin)
               if (args.length < 1) return newReply('enable/disable?')
               if (args[0] === 'enable') {
                  db.data.chats[from].notification.status = true
                  newReply(`${command} is enable`)
               } else if (args[0] === 'disable') {
                  db.data.chats[from].notification.status = false
                  newReply(`${command} is disable`)
               }
            }
            break
            case 'settextwelcome':
            case 'setwelcome':{
               if (!groupAdmins && !isCreator) return newReply(mess.admin)
               if (args.length < 1) return newReply('masukkan textnya')
               db.data.chats[from].notification.status.text_welcome = args[0]
               newReply(mess.done)
            }
            break 
            case 'settextleft':
            case 'setleft':{
               if (!groupAdmins && !isCreator) return newReply(mess.admin)
               if (args.length < 1) return newReply('masukkan textnya')
               db.data.chats[from].notification.status.text_left = args[0]
               newReply(mess.done)
            }
            break 
            case 'closetime':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return newReply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
                }
                newReply(`Close time ${q} dimulai dari sekarang`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
                    arxzy.groupSettingUpdate(m.chat, 'announcement')
                    newReply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return newReply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
                }
                newReply(`Open time ${q} dimulai dari sekarang`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
                    arxzy.groupSettingUpdate(m.chat, 'not_announcement')
                    newReply(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await arxzy.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                newReply(mess.done)
                break
            case 'add':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await arxzy.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                newReply(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await arxzy.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                newReply(mess.done)
                break
            case 'demote':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await arxzy.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                newReply(mess.done)
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!text) return newReply('Text ?')
                await arxzy.groupUpdateSubject(m.chat, text)
                newReply(mess.done)
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!text) return newReply('Text ?')
                await arxzy.groupUpdateDescription(m.chat, text)
                newReply(mess.done)
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!quoted) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                var medis = await arxzy.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await arxzy.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                } else {
                    var memeg = await arxzy.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let teks = `ダ TAG FOR ADMIN ダ
 
                  *MESSAGE: ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `◈ @${mem.id.split('@')[0]}\n`
                }
                arxzy.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'hidetag':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                arxzy.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'totag':
                if (!m.isGroup) return newReply(mess.group)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!isAdmins) return newReply(mess.admin)
                if (!m.quoted) return newReply(`Reply pesan dengan caption ${prefix + command}`)
                arxzy.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'group':
            case 'grup':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'close') {
                    await arxzy.groupSettingUpdate(m.chat, 'announcement').then((res) => newReply(`Sukses Menutup Group 🕊️`)).catch((err) => newReply(json(err)))
                } else if (args[0] === 'open') {
                    await arxzy.groupSettingUpdate(m.chat, 'not_announcement').then((res) => newReply(`Sukses Membuka Group 🕊️`)).catch((err) => newReply(json(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            break
            case 'editinfo':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'open') {
                    await arxzy.groupSettingUpdate(m.chat, 'unlocked').then((res) => newReply(`Sukses Membuka Edit Info Group 🕊️`)).catch((err) => newReply(json(err)))
                } else if (args[0] === 'close') {
                    await arxzy.groupSettingUpdate(m.chat, 'locked').then((res) => newReply(`Sukses Menutup Edit Info Group 🕊️`)).catch((err) => newReply(json(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let response = await arxzy.groupInviteCode(m.chat)
                arxzy.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
            break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                await arxzy.groupRevokeInvite(m.chat)
                    .then(res => {
                        newReply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => newReply(json(err)))
            break


                /* ~~~~~~~~~ MAIN & STATUS BOT ~~~~~~~~~ */
            case 'ping':
            case 'botstatus':
            case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                arxzy.relayMessage(from, { liveLocationMessage: { 
                     degreesLatitude: 35.6895,
                     degreesLongitude: 139.6917,
                     caption: respon,
                     sequenceNumber: 1656662972682001, 
                     timeOffset: 8600, 
                     jpegThumbnail: fs.readFileSync('./media/menu.jpg'),
                     contextInfo: {
                        mentionedJid: [m.sender],
                        externalAdReply: {
                           showAdAttribution: true,
                        }
                     }
                }} , { quoted: m })
            }
            break
            case 'buypremium':
            case 'premiumuser': {
                let teks = `Hi ${pushname}👋\n Ingin Beli Premium? Chat Saja Owner😉`
                await arxzy.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'BUY PREMIUM',
                            body: `15k / MONTH`,
                            thumbnailUrl: 'https://telegra.ph/file/c0cad5270a204eb878711.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'sewa':
            case 'sewabot':
                newReply(`Ketik ${prefix}owner Saja`)
                break
            case 'speedtest': {
                newReply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) arxzy.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'SPEED TEST',
                                body: `FORGET DONATE`,
                                thumbnailUrl: 'https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) arxzy.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'SPEED TEST',
                                body: `FORGET DONATE`,
                                thumbnailUrl: 'https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'runtime':
                let pinga = `Bot Telah Berjalan Selama ${runtime(process.uptime())}`
                arxzy.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'RUNTIME',
                            body: `FORGET DONATE`,
                            thumbnailUrl: 'https://telegra.ph/file/e293453cd41317e7cf2a4.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
            case 'script':
            case 'scriptbot':
                uy = `https://youtube.com/playlist?list=PLRmLRCoejWJsauHXGmkKERWnptlwtOy2q`
                arxzy.sendMessage(m.chat, {
                    text: uy,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'Script Free',
                            body: `SCRIPT BOT ${namabot} Ada Di Youtube @arxzydev`,
                            thumbnailUrl: 'https://telegra.ph/file/0720685135c68851ca869.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'donasi':
                let katanya = `Hallo Kakak ${pushname}\n\nJika Ingin Berdonasi Menggunakan QRIS\n\n\n*NOTES:*\n 1.Bawa Bukti Telah Berdonasi Kepada Owner!!!\nSeberapa Pun Kakak Berdonasi Bagi Kami Sangat Berharga`
                arxzy.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/qris.jpg'),
                    caption: katanya
                }, {
                    quoted: m
                })
                break
            case "owner": {
                arxzy.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Kontak`,
                        contacts: list
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'tqto':
                newReply(`*Terima Kasih Kepada*\n\n>| 1. ArxzyDev ( Author )\n>| 2. LoL Human ( Rest APIs )\n>| 3. ZTRAM ( Team )\n>| 4. Penyedia Module\n>| 5. Queen Elisa\n>| 6. Subscriber & Creator Bot WhatsApp\n\n\n\n\n\n Powered By ArxzyDev`)
            break


                /* ~~~~~~~~~ CONVERT FEATURES ~~~~~~~~~ */
            case 'sticker':
            case 'stiker':
            case 's': {
                if (db.data.users[sender].limit < 1) return newReply(mess.limit)
                if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await arxzy.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                    useLimit(sender, 1)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await arxzy.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                    useLimit(sender, 1)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            case 'anticolong':
            case 'smeta':
            case 'stickermeta': {
               if (db.data.users[sender].limit < 1) return newReply(mess.limit)
               if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
               if (/image/.test(mime)) {
                  let { addExif } = require('./lib/exif')
                  let media = await quoted.download()
                  stick = await addExif(media, packname || '', author || 'Punya Adrian');
                  let encmedia = await arxzy.sendMessage(m.chat, { sticker: stick }, { quoted: m });
                  useLimit(sender, 1)
               } else {
                  newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
               }
            }
            break
            case 'smeme': {
                if (db.data.users[sender].limit < 1) return newReply(mess.limit)
                let respond = `Kirim/Reply image/sticker dengan caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return newReply(respond)
                if (!text) return newReply(respond)
                newReply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await arxzy.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await arxzy.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
                useLimit(sender, 1)
            }
            break
            case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return newReply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return newReply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                newReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await arxzy.downloadMediaMessage(qmsg)
                    let encmedia = await arxzy.sendImageAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await arxzy.downloadMediaMessage(qmsg)
                    let encmedia = await arxzy.sendVideoAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await arxzy.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    arxzy.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await arxzy.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await arxzy.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/newReply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
                newReply(mess.wait)
                let media = await arxzy.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                arxzy.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/newReply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
                newReply(mess.wait)
                let media = await arxzy.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                arxzy.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `Arxzy-MD.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`newReply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
                newReply(mess.wait)
                let media = await arxzy.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                arxzy.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return newReply(`newReply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await arxzy.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await arxzy.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                newReply(mess.wait)
                let media = await arxzy.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    newReply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    newReply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'snobg': {
                let respond = `Kirim Atau Reply Gambar Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) return newReply(respond)
                let dwnld = await arxzy.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.lolhuman.xyz/api/removebg?apikey=${lol}&img=${fatGans}`
                let pop = await arxzy.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
            case 'emojimix2': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                newReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await arxzy.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'emojimix1': {
                if (!text) return newReply(`Contoh : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await arxzy.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return newReply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await arxzy.downloadAndSaveMediaMessage(quoted)
                    arxzy.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await arxzy.downloadAndSaveMediaMessage(quoted)
                    arxzy.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await arxzy.downloadAndSaveMediaMessage(quoted)
                   arxzy.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
            case 'toqr': {
                if (!q) return newReply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await arxzy.sendMessage(from, {
                    image: medi,
                    caption: mess.done
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return newReply(`Example:\n${prefix}fliptext ArxzyDev`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                newReply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            /* ~~~~~~~~~ INFORMATION. FEATURED ~~~~~~~~~ */
            case 'infogempa':
                let k = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lol}`)
                newReply(mess.wait)
                var caption = `Lokasi : ${k.result.lokasi}\n`
                caption += `Waktu : ${k.result.waktu}\n`
                caption += `Potensi : ${k.result.potensi}\n`
                caption += `Magnitude : ${k.result.magnitude}\n`
                caption += `Kedalaman : ${k.result.kedalaman}\n`
                caption += `Koordinat : ${k.result.koordinat}`
                await arxzy.sendMessage(m.chat, {
                    image: {
                        url: k.result.map
                    },
                    caption
                }, {
                    quoted: m
                })
                break
                /* ~~~~~~~~~ DATABASE MEDIA ~~~~~~~~~ */
            case 'listbadword': case 'lb':
               let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
               for (let i of bad) {
                  lbw += `> ${i.replace(bad)}\n`
               }
               await newReply(lbw)
            break 
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VnArxzy) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VnArxzy.length}*`
                newReply(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerArxzy) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerArxzy.length}*`
                newReply(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageArxzy) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageArxzy.length}*`
                newReply(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoArxzy) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoArxzy.length}*`
                newReply(teks)
            }
            break
            case 'addvideo': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Nama Videonya?')
                if (VideoArxzy.includes(q)) return newReply("Nama Yang Kamu Masukan Sudah Ada")
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                VideoArxzy.push(q)
                await fsx.copy(delb, `./media/video/${q}.mp4`)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(VideoArxzy))
                fs.unlinkSync(delb)
                newReply(`Success Menambahkan Video\nUntuk Melihat Ketik ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Video')
                if (!VideoArxzy.includes(q)) return newReply("Nama Tidak Ada Di Dalam Database")
                let wanu = VideoArxzy.indexOf(q)
                VideoArxzy.splice(wanu, 1)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(VideoArxzy))
                fs.unlinkSync(`./media/video/${q}.mp4`)
                newReply(`Success Sukses Menghapus Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Nama Imagenya?')
                if (ImageArxzy.includes(q)) return newReply("Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database")
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                ImageArxzy.push(q)
                await fsx.copy(delb, `./media/image/${q}.jpg`)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(ImageArxzy))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Image\nUntuk Cek Ketik ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Imagenya')
                if (!ImageArxzy.includes(q)) return newReply("Nama Image Yang Kamu Masukan Tidak Terdaftar")
                let wanu = ImageArxzy.indexOf(q)
                ImageArxzy.splice(wanu, 1)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(ImageArxzy))
                fs.unlinkSync(`./media/image/${q}.jpg`)
                newReply(`Suksed Menghapus Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Stickernya?')
                if (StickerArxzy.includes(q)) return newReply("Nama Telah Di Pakai")
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                StickerArxzy.push(q)
                await fsx.copy(delb, `./media/sticker/${q}.webp`)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(StickerArxzy))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Sticker\nUntuk Mengecek Ketik ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Stickernya')
                if (!StickerArxzy.includes(q)) return newReply("Nama Tidak Terdaftar Di Database")
                let wanu = StickerArxzy.indexOf(q)
                StickerArxzy.splice(wanu, 1)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(StickerArxzy))
                fs.unlinkSync(`./media/sticker/${q}.webp`)
                newReply(`Sukses Menghapus Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Namanya?')
                if (VnArxzy.includes(q)) return newReply("Nama Telah Di Pakai")
                let delb = await arxzy.downloadAndSaveMediaMessage(quoted)
                VnArxzy.push(q)
                await fsx.copy(delb, `./media/audio/${q}.mp3`)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(VnArxzy))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Audio\nUntuk Mengecek Ketik ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Namanya')
                if (!VnArxzy.includes(q)) return newReply("Nama Tidak Terdaftar Di Database")
                let wanu = VnArxzy.indexOf(q)
                VnArxzy.splice(wanu, 1)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(VnArxzy))
                fs.unlinkSync(`./media/audio/${q}.mp3`)
                newReply(`Sukses Menghapus Audio ${q}`)
            }
            break




            /* ~~~~~~~~~ GAME FEATURES ~~~~~~~~~ */
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return newReply('Kamu masih didalam game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    newReply('Partner ditemukan!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
                    if (room.x !== room.o) await arxzy.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await arxzy.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    newReply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        arxzy.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        newReply(`Session TicTacToe🎮 tidak ada`)
                    } else mewReply('?')
                } catch (e) {
                    newReply('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) newReply(`Selesaikan suit mu yang sebelumnya`)
                if (m.mentionedJid[0] === m.sender) return newReply(`Tidak bisa bermain dengan diri sendiri !`)
                if (!m.mentionedJid[0]) return newReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${_owner[1]}`, m.chat, {
                    mentions: [_owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return newReply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
                this.suit[id] = {
                    chat: await arxzy.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) arxzy.sendText(m.chat, `_Waktu suit habis_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'kuismath':
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let {
                    genMath,
                    modes
                } = require('./lib/math')
                if (!text) return newReply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh Object.keys(global.db.data.users)an: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                arxzy.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    newReply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'family100': {
                if ('family100' + m.chat in _family100) {
                    newReply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100' + m.chat] = {
                    id: 'family100' + m.chat,
                    pesan: await arxzy.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'tebak': {
                if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m)
                        delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m)
                        delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m)
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m)
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
                        delete tebaktebakan[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera2') {
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera2[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kabupaten') {
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
                        tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.title)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
                        delete tebakkabupaten[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kimia') {
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
                        tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.lambang)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m)
                        delete tebakkimia[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'asahotak') {
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m)
                        delete tebakasahotak[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'siapakahaku') {
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m)
                        delete tebaksiapakahaku[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'susunkata') {
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
                        tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m)
                        delete tebaksusunkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tekateki') {
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    arxzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        arxzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m)
                        delete tebaktekateki[m.sender.split('@')[0]]
                    }
                } 
            }
            break
            case 'akinator':
                newReply(`Akinator adalah sebuah permainan dan aplikasi perangkat bergerak yang berupaya menebak secara rinci dan pasti isi pikiran Pengguna permainan ini melalui serentetan pertanyaan.\n\n~> ${prefix}akinatorstart : Untuk memulai\n~> ${prefix}akinatorstop : Untuk berhenti`)
            break
            case 'akinatorstart':
                if (!isPremium) return newReply(mess.prem)
                if (m.isGroup) return newReply(mess.private)
                if (akinator.hasOwnProperty(m.sender.split('@')[0])) return newReply("Selesein yg sebelumnya dulu atuh")
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lol}`)
                let {
                    server, frontaddr, session, signature, question, step
                } = get_result.result
                const data = {}
                data["server"] = server
                data["frontaddr"] = frontaddr
                data["session"] = session
                data["signature"] = signature
                data["question"] = question
                data["step"] = step
                imi_txt = `${question}\n\n`
                imi_txt += "0 - Ya\n"
                imi_txt += "1 - Tidak\n"
                imi_txt += "2 - Saya Tidak Tau\n"
                imi_txt += "3 - Mungkin\n"
                imi_txt += "4 - Mungkin Tidak"
                arxzy.sendText(m.chat, imi_txt, m).then(() => {
                    akinator[m.sender.split('@')[0]] = data
                    fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                })
                break
            case 'akinatorstop':
                if (!akinator.hasOwnProperty(m.sender.split('@')[0])) return newReply("Anda tidak memiliki akinator sebelumnya")
                delete akinator[m.sender.split('@')[0]]
                fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                newReply("Success mengcancel akinator sebelumnya")
            break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                newReply(`${m.pushName} *Telah AFK*${text ? ': ' + text : ''}`)
            }
            break	
            case 'ai': 
            case 'ask':
            case 'openai': {
               if (db.data.users[sender].limit < 1) return newReply(mess.limit)
	            if (!q) return newReply(`Example : ${prefix + command} Apa Itu Rumah`)
			      var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`)
			      var isi = isiai.result
		         await newReply(isi)
		         useLimit(sender, 1)
			   }
			   break
            case 'tiktok':
            case 'ttdl': {
               if (db.data.users[sender].limit < 1) return newReply(mess.limit)
               if (!q) return newReply('Link?')
               let tt = await fetchJson(`https://api.lolhuman.xyz/api/tiktok2?apikey=${lol}&url=${q}`)
               await arxzy.sendMessage(m.chat, { video: { url: tt.result }, caption: mess.done }, { quoted: m})
               useLimit(sender, 1)
            }
            break
            case 'tiktokaudio':
            case 'ttaudio': {
                if (db.data.users[sender].limit < 1) return newReply(mess.limit)
                if (!q) return newReply('where is the link')
                let i = await fetchJson(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lol}&url=${q}`)
                await arxzy.sendMessage(m.chat, {
                    audio: {
                        url: i.result
                    },
                    mimetype: 'audio/mp4'
                }, {
                    quoted: m
                })
                useLimit(sender, 1)
            }
            break
            case 'cocofun':
                if (!q) return newReply('where is the link')
                let j = await fetchJson(`https://api.lolhuman.xyz/api/cocofun?apikey=${lol}&url=${q}`)
                arxzy.sendMessage(m.chat, {
                    video: {
                        url: j.result.nowm
                    },
                    caption: j.result.tag
                }, {
                    quoted: m
                })
                break
            case 'mediafire':
                if (!q) return newReply('where is the link')
                let ha = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${lol}&url=${q}`)
                arxzy.sendMessage(m.chat, {
                    document: {
                        url: ha.result.link
                    },
                    minetype: '*/*'
                }, {
                    quoted: m
                })
                break
            case 'pin':
            case 'pindl':
                if (!q) return newReply('where is the link')
                let l = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lol}&url=${q}`)
                await arxzy.sendMessage(m.chat, {
                    video: {
                        url: l.result
                    }
                }, {
                    quoted: m
                })
                break
            case 'snackvideo':
            case 'sv':
                if (!q) return newReply('where is the link')
                let ma = await fetchJson(`https://api.lolhuman.xyz/api/snackvideo?apikey=${lol}&url=${q}`)
                arxzy.sendMessage(m.chat, {
                    video: {
                        url: ma.result.url
                    },
                    caption: ma.result.caption
                }, {
                    quoted: m
                })
                break
            case 'ytmp4': {
                if (!q) return newReply('where is the link')
                let n = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lol}&url=${q}`)
                let mono = '```'
                let ytmp4p = `${mono}Downloader Youtube\n\nTitle: ${n.result.title}\nDiUpload Oleh: ${n.result.uploader}\nLinkChannel: ${n.result.channel}\nDurasi Video: ${n.result.duration}\nDitonton Sebanyak: ${n.result.view}${mono}`
                await arxzy.sendMessage(m.chat, {
                    document: {
                        url: n.result.link.link
                    },
                    mimetype: 'video/mp4',
                    fileName: n.result.title + ".mp4",
                    caption: ytmp4p,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: n.result.title,
                            body: '',
                            thumbnailUrl: n.result.thumbnail,
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'ytmp3': {
                if (!q) return newReply('where is the link')
                let n = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${lol}&url=${q}`)
                let mono = '```'
                let ytmp4p = `${mono}Downloader Youtube\n\nTitle: ${n.result.title}\nDiUpload Oleh: ${n.result.uploader}\nLinkChannel: ${n.result.channel}\nDurasi Video: ${n.result.duration}\nDitonton Sebanyak: ${n.result.view}${mono}`
                await arxzy.sendMessage(m.chat, {
                    document: {
                        url: n.result.link.link
                    },
                    mimetype: 'audio/mp3',
                    fileName: n.result.title + ".mp3",
                    caption: ytmp4p,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: n.result.title,
                            body: '',
                            thumbnailUrl: n.result.thumbnail,
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'igdl':
            case 'ig':
            case 'instagram': {
                if (db.data.users[sender].limit < 1) return newReply(mess.limit)
                if (!q) return newReply("Link?")
                let ag = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lol}&url=${q}`)
                for (var i = 0; i < ag.result.length; i++) {
                    let pap = ag.result[i].includes('.jpg') ? 'image' : 'video'
                    await arxzy.sendMessage(m.chat, {
                        [pap]: {
                            url: ag.result[i]
                        },
                        caption: ''
                    }, {
                        quoted: m
                    })
                    useLimit(sender, 1)
                }
            }
            break
            case 'pindl': {
                if (!q) return newReply("Link?")
                let apacuba = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lol}&url=${q}`)
                for (var i = 0; i < apacuba.result.length; i++) {
                    let pap = apacuba.result[i].includes('.jpg') ? 'image' : 'video'
                    await arxzy.sendMessage(m.chat, {
                        [pap]: {
                            url: apacuba.result[i]
                        },
                        caption: ''
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'igdlh':
            case 'highlights': {
                if (!q) return newReply('Link?')
                let ap = await fetchJson(`https://api.lolhuman.xyz/api/ig-highlights?apikey=${lol}&url=${q}`)
                for (var oa = 0; oa < ap.result.length; oa++) {
                    let pap = ap.result[oa].includes('.jpg') ? 'image' : 'video'
                    await arxzy.sendMessage(m.chat, {
                        [pap]: {
                            url: ap.result[oa]
                        },
                        caption: ''
                    }, {
                        quoted: m
                    })
                }
            }
            break


            case 'qc': {
                if (db.data.users[sender].limit < 1) return newReply(mess.limit)
                const {
                    quote
                } = require('./lib/quote.js')
                    let ppnyauser = await arxzy.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                    if (!quoted) {
                        let ppnyauser = await arxzy.profilePictureUrl(quoted.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                        let rest = await quote(text, arxzy.getName(quoted.sender), ppnyauser)
                        arxzy.sendImageAsSticker(m.chat, rest.result, m, {
                           packname: `${global.packname}`,
                           author: `${global.author}`
                        })
                        useLimit(sender, 1)
                    } else {
                        const rest = await quote(text, pushname, ppnyauser)
                        newReply(mess.wait)
                        arxzy.sendImageAsSticker(m.chat, rest.result, m, {
                           packname: `${global.packname}`,
                           author: `${global.author}`
                        })
                        useLimit(sender, 1)
                    }
            }
            break
            case 'ttp':
                if (!q) return newReply('Masukan Text')
                newReply(mess.wait)
                arxzy.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/ttp?apikey=${lol}&text=${q}`
                    }
                }, {
                    quoted: m
                })
            break
            case 'attp':
                if (!q) return newReply('Masukan Text')
                newReply(mess.wait)
                arxzy.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/attp?apikey=${lol}&text=${q}`
                    }
                }, {
                    quoted: m
                })
            break

            case 'remini':
            case 'hd': {
                if (db.data.users[sender].limit < 1) return newReply(mess.limit)
                if (!isMedia) return newReply("Where The A Image")
                if (/image/.test(mime)) {
                let media = await arxzy.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                arxzy.sendMessage(m.chat, {
                    image: {
                        url: `https://api.lolhuman.xyz/api/upscale?apikey=${lol}&img=${anu}`
                    },
                    caption: mess.done
                }, {
                    quoted: m
                })
                useLimit(sender, 1)
                } else {
                  newReply('Only Pictures')
                }
            }
            break
            case 'removebg':
            case 'nobg': {
                if (!isMedia) return newReply("Where The A Image")
                let media = await arxzy.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                arxzy.sendMessage(m.chat, {
                    image: {
                        url: `https://api.lolhuman.xyz/api/removebg?apikey=${lol}&img=${anu}`
                    },
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break
            case 'tele':
            case 'telestick': {
                if (!isPremium) return newReply(mess.prem)
                if (!q) return newReply("Link?")
                let agg = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lol}&url=${q}`)
                for (var ki = 0; ki < agg.result.sticker.length; ki++) {
                    await arxzy.sendImageAsSticker(m.chat, agg.result.sticker[ki], m, {
                        packname: packname,
                        author: author
                    })
                }
            }
            break
            case 'tiktokslide':
            case 'ttslide': {
               if (!isPremium) return newReply(mess.prem)
               if (!q) return newReply('Link?')
                  let tt = await fetchJson(`https://skizo.tech/api/tiktok?url=${q}&apikey=${xzn}`)
                  if (tt.data.duration == 0) {
                     for (let i of tt.data.images) {
                        await arxzy.sendMessage(from, {
                           image: {
                              url: i
                           },
                           caption: ''
                        }, { quoted: m })
                     }
                  } else {
                     newReply(`please use features .tiktokdl for _*free user*_`)
                  }
            }
            break
            case 'ttdlhd':
            case 'tiktokhd':{
               if (!isPremium) return newReply(mess.prem)
               if (!q) return newReply('link?')
               let tt = await fetchJson(`https://skizo.tech/api/tiktok?url=${q}&apikey=${xzn}`)
               await arxzy.sendMessage(from, { video: { url: tt.data.hdplay }, caption: mess.done }, { quoted: m})
            }
            break
            case 'menu':
            case 'help': {
            let a = db.data.users[sender]
let menunya = `Hallo kak 👋 ${pushname}\nperkenalkan saya queen elisa md, saya di sini sebagai robot atau ai yang membantu hal-hal tertentu. 

●─────────────────❒
│ *DATE:* *${hariini}*
│ *TIME:* *${wib}* 
│ *SERIAL CODE:*
│ *${a.serialNumber}*
│ *LIMIT:* ${a.limit}
│ *ROLE:* ${isPremium ? 'Premium' : 'Freemium'}
│ *TITLE* ${a.title ? a.title : '-'}
●─────────────────❒
●─────────────────❒
│ *TOTAL USER:* ${Object.keys(global.db.data.users).length} USERS
│ *TOTAL HIT:* ${global.db.data.settings[botNumber].totalhit} HIT
│ *TOTAL CHAT:* ${Object.keys(global.db.data.chats).length} GROUP/CHAT
⬤─────────────────❒
${readmore}
⬤─────────────────❒
│[ *OWNER MENU* ]
│.addbadword
│.delbadword
│.addtitle
│.deltitle
│.autosimi *[caption]*
│.delsession
│.broadcast
│.broadcastgrup
│.setimgquoted
│.setvidmenu
│.setmenu *[option]*
│.setreplay *[option]*
│.statustext
│.statusvideo
│.statusimage
│.statusaudio
│.addowner
│.delowner
│.addpremium
│.delpremium
│.addlimit *[user|limit]*
│.dellimit *[user|limit]*
│.resetuser
│.resethit
│.cekapikey
│.getsesi
│.join *[link]*
│.leave
│.ipserver
│.shutdown
│.restart
│.autoread *[on/off]*
│.autobio *[on/off]*
│.mode *[option]*
│.setwm
│.setppbot *[option*]
│.block
│.unblock
│.backup
│.getcase
│.addcase
⬤─────────────────❒
⬤─────────────────❒
│ [ *PREMIUM MENU* ]
│.akinator
│.tiktokslide
│.tiktokhd
│.telestick
│.txt2img
⬤─────────────────❒
⬤─────────────────❒
│[ *DOWNLOAD MENU* ]
│.tiktok
│.tiktokaudio
│.instagram
│.pindl
│.cocofun
│.mediafire
│.snack video
│.ytmp3 *[error]*
│.ytmp4 *[error]*
⬤─────────────────❒
⬤─────────────────❒
│[ *CONVERT MENU* ]
│.sticker
│.snobg
│.toqr
│.fliptext
│.textstyle
│.toimg
│.toaudio
│.tomp4
│.tomp3
│.tovn
│.smeta
│.tourl
│.togif
│.qc
│.emojimix
│.emojimix2
│.toonce
│.attp
│.ttp
⬤─────────────────❒
⬤─────────────────❒
│[ *MAIN MENU* ]
│.ping
│.owner
│.speedtest *[error]*
│.menu
│.ceklimit
│.cekakun
│.buypremium
│.sewa
│.runtime
│.script
│.donate
│.tqto
⬤─────────────────❒
⬤─────────────────❒
│ [ *GAME MENU* ]
│.family100
│.tebak gambar
│.tebak kata
│.tebak kalimat
│.tebak lirik
│.tebak tebakan
│.tebak bendera
│.tebak bendera2
│.tebak kabupaten
│.tebak kimia
│.tebak asaotak
│.tebak siapakahaku
│.tebak susunkata
│.tebak tekateki
│.kuis math
│.suitpvp
│.tictactoe
⬤─────────────────❒
│[ *GROUP MENU* ]
│.badword *[enable/disable]*
│.autosimi *[enable/disable]*
│.antilink *[enable/disable]*
│.antilinkgc *[enable/disable]*
│.welcome *[enable/disable]*
│.left *[enable/disable]*
│.setwelcome *[teks]*
│.setleft *[teks*]
│.closetime *[time]*
│.opentime *[time]*
│.add *[reply]*
│.kick *[reply]*
│.promote *[reply]*
│.demote *[reply]*
│.setname
│.setdesc
│.setppgc *[full]*
│.tagall
│.hidetag
│.totag
│.group *[close/open]*
│.editinfo
│.linkgc
│.revoke
⬤─────────────────❒

*Created By Queen Elisa Botz*
*©2015 - 2023*`
                if (typemenu === 'v1') {
                    arxzy.sendMessage(m.chat, {
                        image: fs.readFileSync('./media/menu.jpg'),
                        caption: menunya
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    arxzy.sendMessage(m.chat, {
                        text: menunya,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `Created By Queen Elisa Bot`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    arxzy.sendMessage(m.chat, {
                        video: fs.readFileSync('./media/menu.mp4'),
                        caption: menunya,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    arxzy.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: menunya
                        }
                    }, {})
                } else if (typemenu === 'v5') {
                    arxzy.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'IDR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: menunya,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v6') {
                    arxzy.sendMessage(m.chat, {
                        document: {
                           url: 'https://telegra.ph/file/9bef2d8c6757d0e2b6423.jpg'
                        },
                        caption: menunya,
                        mimetype: 'application/zip',
                        fileName: namabot,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `Created By Queen Elisa Bot`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                }
            }
            break
            case 'cekakun':
            case 'account': {
               let a = db.data.users[sender]
               let b = `ʙᴇʀɪᴋᴜᴛ ɪɴғᴏʀᴍᴀsɪ ᴀᴋᴜɴ ᴀɴᴅᴀ\n`
               b += `================================\n`
               b += `sᴇʀɪᴀʟᴄᴏᴅᴇ:\n*[${a.serialNumber}]*\n`
               b += `ᴛɪᴛʟᴇ: ${a.title}\n`
               b += `ᴀғᴋᴛɪᴍᴇ: ${a.afkTime}\n`
               b += `ᴀғᴋʀᴇᴀsᴏɴ: ${a.afkReason}\n` 
               b += `ɴɪᴄᴋɴᴀᴍᴇ: ${a.nick}\n`
               b += `sᴛᴀᴛᴜs ᴘʀᴇᴍɪᴜᴍ: ${a.premium}\n`
               b += `ʟɪᴍɪᴛ ᴀɴᴅᴀ: ${a.limit}\n`
               b += `================================`
               arxzy.sendMessage(sender, { text: b }, { quoted: m })
               newReply('Akun Telah Dikirim Telah Pribadi Chat')
            }
            break
            case 'limit':
            case 'ceklimit': {
               let a = db.data.users[sender]
               let b = `ʟɪᴍɪᴛ ᴀɴᴅᴀ ${a.limit}\n` 
               b += `sᴛᴀᴛᴜs ᴘʀᴇᴍɪᴜᴍ ${isPremium ? 'ᴏɴ' : 'ᴏғғ'}\n` 
               b += `sᴇʀɪᴀʟᴄᴏᴅᴇ:\n*[${a.serialNumber}]*\n`
               newReply(b)
            }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return newReply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return newReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return newReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }
            }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})


