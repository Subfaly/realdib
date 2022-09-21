// eslint-disable-next-line no-undef
const  { Client, GatewayIntentBits } = require("discord.js");



const client = new Client({
     intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.GuildMembers,
          GatewayIntentBits.MessageContent
     ]
})

client.on("messageCreate", async (message) => {
     if (!message?.author.bot) {
         console.log(message.content)
          if(message.content.includes("Колко е часа")){
               
               let today = Date.now();
               let hours = today.getUTCHours() + 2;
               let minutes = today.getUTCMinutes();
               let seconds = today.getUTCSeconds();
               message.reply(`${hours}/${minutes}/${seconds}`);
          }
     }
})


// eslint-disable-next-line no-undef
client.login(process.env.TOKEN)