/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

// Other
global.owner = ['6285824629954','6285824629954','6285824629954']
global.pemilik = ['6285824629954']
global.premium = ['6285824629954']
global.pengguna = 'VANZZ OFC'
global.botnma = 'VANZZMD'
global.harga = '10k'
global.atasreply = 'Subscribe' //BUAT REPLAY DI ATAS NYA ADA TEXT
global.atasreply2 = 'Follow Instagram' //BUAT REPLAY DI ATAS NYA ADA TEXT KE 2
global.webreply = 'https://m.youtube.com/channel/UCEDb6SkiPU0theI8J_WEZZA' //URL DI ATAS REPLAY
global.webreply2 = 'https://instagram.com/vanzz.ofc' //URL BUAT DI ATAS REPLAY KE 2
global.melcanz = 'melcantik'
global.footer = 'VANZZ OFC' //FooterText Biar Di Bawah Nya Ada Text 
global.web = 'https://m.youtube.com/channel/UCEDb6SkiPU0theI8J_WEZZA' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://github.com/abdibot' //Ubah Jga Bebas Sama lu 
global.ganti = 'Y O U T U B E ME' //Edit Terserah Lu Mau Apa
global.ganti2 = 'Github'
global.accestken = 'KahfzTod'
global.ownernma = 'VANZZOFC'
global.packname = 'VANZZOFC'
global.author = 'WhatsApp Bot'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','ð¦','ð¤','ð¿']
global.sp = 'â­'
global.mess = {
    success: 'â S u c c e s s',
    admin: 'Fitur Khusus Admin Group!ð',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!â',
    owner: 'Fitur Khusus Owner Botâ',
    group: 'Fitur Digunakan Hanya Untuk Group!â',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!â',
    bot: 'Fitur Khusus Pengguna Nomor Botâ',
    wait: 'W a i t . . . . ',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
