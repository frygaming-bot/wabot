let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085751501375]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [085751501375]
│ • https://saweria.co/LitRHap
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
