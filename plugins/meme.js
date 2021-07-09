let fetch = require('node-fetch')
//plugin by Samu330
try {
let handler  = async (m, { conn }) => {
let url = await fetch('https://insanebot.com.ar/memes/memes')
//let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))

let samu = await url.json()
let erest = samu[Math.floor(Math.random() * samu.length)]
            await conn.sendFile(m.chat, erest, '', 'meme', m)
            if (!e) console.log(e)
            
 }
}
else(e) {
         console.log(e)

}
     
handler.help = ['meme']
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
