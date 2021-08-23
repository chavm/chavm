let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.command = /^(pregunta|preguntas)$/i
handler.help = ['game']
handler.tags = ['preguntas']
handler.owner = false
handler.mods = true
handler.limit = true
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  'PREGUNTA:¿cuantos años tiene insanebot?',
]
