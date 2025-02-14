global.math = global.math ? global.math : {}
let handler = async (m, { conn, text }) => {
  let id = m.chat
  if (id in global.math) {
    clearTimeout(global.math[id][3])
    delete global.math[id]
    m.reply('matematica cancelada')
  }
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`*${format}* = _${result}_`)
  } catch (e) {
     console.log(e)
  }
}
handler.help = ['cancel']
handler.tags = ['tools']
handler.command = /^(cancel)$/i
handler.exp = 5
handler.admin = false
handler.premium = true
handler.group = true

module.exports = handler
