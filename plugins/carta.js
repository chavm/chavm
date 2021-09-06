let fetch = require('node-fetch')
//plugin by Samu330
async function retryResize(options, retries = 0) {
    let { imagePath, size, quality = 60, maxRetries = 5 } = options;
  
let handler  = async (m, { conn }) => {
if (new Date - global.DATABASE._data.users[m.sender].yugi > 2000000) {
let url = await fetch('https://insanebott.000webhostapp.com/yugio')
//let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
let samu = await url.json()
let erest = samu[Math.floor(Math.random() * samu.length)]

            await
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
  await conn.sendFile(m.chat, erest, '', 'YUGI HO', m)
  global.DATABASE._data.users[m.sender].yugi = new Date * 1
  } else m.reply('Todavia no  puedes cartear')
}
handler.help = ['carta','yugi']
handler.tags = ['game']
handler.command = /^(carta|yugi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.exp = 3

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

