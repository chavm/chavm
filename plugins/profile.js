async function retryResize(options, retries = 0) {
    let { imagePath, size, quality = 60, maxRetries = 5 } = options;
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn }) => {
  let pp = './src/images.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let image = null;
  try {
    pp = await conn.getProfilePicture(who)
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
  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, warning, robos, regTime, age, level } = global.DATABASE.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
Nombre: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nEstado: ' + about : ''}
${exp} Exp
Limit: ${limit}
Advertencias: ${warning} / 5
Robos: ${robos}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['perfil [@user]']
handler.tags = ['tools']
handler.command = /^(perfil|profile)$/i
module.exports = handler

