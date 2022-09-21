const  { Client, GatewayIntentBits } = require("discord.js");



const client = new Client({
     intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.GuildMembers,
     ]
})

client.on("messageCreate", async (message) => {
     if (!message?.author.bot) {
          if(message.content == "Колко е часа!"){
              
          }
     }
})


// eslint-disable-next-line no-undef
client.login(process.env.TOKEN)