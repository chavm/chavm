let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
  let who = text
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  let txt = text.replace(text.split`@`[0], '').trim()
  let xp = parseInt(txt)
  if (isNaN(xp)) return conn.reply(m.chat, `es .pagar @mension cantidad`, m)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 26) return conn.reply(m.chat, `minimo 26`, m)
  let users = global.DATABASE._data.users
  if (exp > users[m.sender].exp) return conn.reply(m.chat, `no tenes esa exp`, m)
  users[who].exp += xp
  
  m.reply(`Más impuestos gastaste  *${-exp} XP*`)
  conn.fakeReply(m.chat, `te enviaron *+${xp} XP*`, who, m.text)
}
handler.help = ['pagar @user <amount>']
handler.tags = ['xp']
handler.command = /^pagar$/
handler.rowner = false
handler.group = true
handler.limit = true

module.exports = handlerr
