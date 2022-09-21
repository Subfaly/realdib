import {
     Client, GatewayIntentBits,
} from "discord.js";
import dotenv from "dotenv"
dotenv.config()

const client = new Client({
     intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.GuildMember,
          GatewayIntentBits.DirectMessages
     ]
})

client.on("messageCreate", async (message) => {
     if (!message?.author.bot) {
          message.author.send("Stop!")
     }
})


// eslint-disable-next-line no-undef
client.login(process.env.TOKEN)