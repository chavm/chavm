async function retryResize(options, retries = 0) {
    let { imagePath, size, quality = 60, maxRetries = 5 } = options;
let fetch = require('node-fetch')
//plugin by Samu330
let handler  = async (m, { conn }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastme > 5400) {
let url = await fetch('https://insanebott.000webhostapp.com/meme')
//let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
let samu = await url.json()
let erest = samu[Math.floor(Math.random() * samu.length)]
            await conn.sendFile(m.chat, erest, '', 'MEME', m)
 let image = null;
    try {
        image = await Jimp.read(imagePath);
        await image.resize(size, Jimp.AUTO);
        await image.quality(quality);
    } catch (e) {
        if (retries >= maxRetries) {
            throw e;
        }
                
        image = await retryResize(options, retries++);
    }
   

    return image;
}
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else m.reply('Cargando..')
}



handler.help = ['meme','memes']
handler.tags = ['images']
handler.command = /^(meme|memes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
