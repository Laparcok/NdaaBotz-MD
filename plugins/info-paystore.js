let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _${sh}k/grup (1 minggu)_
┊⫹⫺ *Normal:* _${sn}k/grup (1 bulan)_
┊⫹⫺ *Standar:* _${ss}k/grup (2 bulan)_
┊⫹⫺ *Pro:* _${sp}k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _${sv}k/grup (12 bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph}k (1 minggu)_
┊⫹⫺ *Normal:* _${pn}k (1 bulan)_
┊⫹⫺ *Pro:* _${pp}k (4 bulan)_
┊⫹⫺ *Vip:* _${pv}k (8 bulan)_                                               
┊⫹⫺ *Permanent:* = _${ppm}k (Unlimited)_
╰═┅═━––––––๑

*Bisa juga menggunakan payment wl/dl Growtopia*
1 minggu + Premium : 5wls
1bulan + premium : 20 wls
2 bulan + premium : 30 wls
4 bulan + premium : 50 wls
permanent + premium : 1dls

*⫹⫺ PAYMENT:*
• *Pulsa:* [${ppulsa}]
• *Dana:* [${pdana}]
• *OVO:* [${povo}]
• *Gopay:* [${pgopay}]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

Note:Kalo Mau beli chat owner langsung karena kalau make order owner tidak akan respon

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sn + 'k (1 bulan)' },
	{title: "🔖 𝗦𝗧𝗔𝗡𝗗𝗔𝗥", rowId: '.order *Paket:* STANDAR • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + ss + 'k (2 bulan)' },
	{title: "🔖 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sp + 'k (4 bulan)' },
	{title: "🔖 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pn + 'k (1 bulan)' },
	{title: "🌟 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pp + 'k (4 bulan)' },
	{title: "🌟 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pv + 'k (8 bulan)' },
	{title: "🌟 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧", rowId: '.order *Paket:* PERMANENT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
