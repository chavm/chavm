let fetch = require('node-fetch')
//plugin by Samu330

let handler  = async (m, { conn }) => {
let url = await fetch('https://insanebott.000webhostapp.com/meme')
//let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
let samu = await url.json()
let erest = samu[Math.floor(Math.random() * samu.length)]
            await conn.sendFile(m.chat, erest, '', 'MEME', m)
}
handler.help = ['meme','memes']
handler.tags = ['images']
handler.command = /^(meme|memes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.limit = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
