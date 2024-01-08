const fs = require('fs')
const chalk = require('chalk')

global.apikey = '-' //https://api.lolhuman.xyz
global.rosekey = '-' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'CIYA-MD V2.1'
global.namaowner = 'SanZzStoreお-ぎ'

//—————「 Setting Owner 」—————//
global.owner = '62838931691088'
global.ownernomer = ["62838931691088"]
global.premium = ['62838931691088']

//—————「 Set Wm 」—————//
global.packname = ''
global.author = 'SanZModzお-ぎ'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/0b977303a3b4a2df9a3fb.jpg'
global.isLink = `https://youtube.com/@SanZxyz1`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
