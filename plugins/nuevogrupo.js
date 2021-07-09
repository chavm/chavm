let handler  = async (m, { conn, text}) => {
  if (!text){
    conn.reply(m.chat,'Ingresa el link del grupo para añadirme :)',m)
  }else {
    conn.reply(global.owner + '@s.whatsapp.net',`*Grupo enviado de: @${m.sender.split('@')[0]}*\n\n${text}`, m,{contextInfo: {
      mentionedJid: [m.sender]
    }})
    conn.reply(m.chat,`Se envió el grupo a revisión\n\nSegui a @insanebot.oficial en ig\n\nSabías el hecho importante de que los grupos tienen que tener al menos mas de 25 participantes`,m)
  }
}
handler.help = ['nuevogrupo *link*']
handler.tags = ['info']
handler.command = /^(nuevogrupo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true
handler.exp = 250
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
