let fs = require('fs')
let fetch = require('node-fetch')
global.tum = fs.readFileSync('./src/Ah5.jpeg')
global.tum2 = fs.readFileSync('./src/emror.jpeg')
global.thumb = fs.readFileSync('./src/thumb.jpeg')
global.thumb2 = fs.readFileSync('./src/emror.jpeg')
global.owner = ['62857515013751'] // Put your number here
global.mods = ['6285693120588'] // Want some help?
global.prems = ['6287842147162','6285893120588','6285656615441'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  Dehan: 'https://dhnjing.xyz',
  Velgrynd: 'https://api.ichikaa.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'MahliKey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'Nyarlathotep',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://dhnjing.xyz': 'e2645065aaced89861b4',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.ichikaa.xyz': '79lJ9HEA'
}

// Sticker WM
global.packname = 'I hope you\'re fine'
global.author = 'LitRHap'
global.multiplier = 69 // The higher, The harder levelup

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
