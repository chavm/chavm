let fetch = require('node-fetch')
//plugin by Samu333

let handler  = async (m, { conn }) => {
    let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=memes%20espa%C3%B1ol%20con%20peque%C3%B1o')
//let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
let samu = await url.json()

let erest = samu[Math.floor(Math.random() * samu.length)]
            await conn.sendFile(m.chat, erest, '', '->> *memes* <<-', m)
}
handler.help = ['memes']
handler.tags = ['images']
handler.command = /^memes?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.exp = 0
handler.limit = true
handler.fail = null

module.exports = handler
