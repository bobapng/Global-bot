const Discord = require("discord.js"); //version = 11.6.4
const L = new Discord.Client({
    disableEveryone: true
});


L.on("ready", () => {
    console.log("L")
})

L.on("message", message => {
    if(message.author.bot) return;
   if(message.channel.id === "id1"){
       L.channels.get("id2").send(`**${message.author.tag}** : ${message.content}`)
   }
   if(message.channel.id === "id2"){
    L.channels.get("id1").send(`**${message.author.tag}** : ${message.content}`)
}
})

L.login("token here");
