const  { Client, GatewayIntentBits } = require("discord.js");
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
function Question(){
readline.question(`Type in chat:`, (text) => {
    const channel = client.channels.cache.get('1008764282223214623');
    channel.send(text);
    
    Question();
});
}
Question();

const client = new Client({
     intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.GuildMembers,
     ]
})
client.on("messageCreate", (msg) =>{
    

})

const mySecret = process.env['TOKEN']

// eslint-disable-next-line no-undef
client.login(mySecret)