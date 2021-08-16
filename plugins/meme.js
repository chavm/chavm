let fetch = require('node-fetch')
//plugin by Samu330

let handler  = async (m, { conn }) => {
let url = await fetch('https://insanebott.000webhostapp.com/meme')
//let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
let samu = await url.json()
let erest = samu[Math.floor(Math.random() * samu.length)]
            await conn.sendFile(m.chat, erest, '', 'MEME', m)
}
handler.help = ['imeme']
handler.tags = ['images']
handler.command = /^meme?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
