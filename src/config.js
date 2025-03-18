require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",
    clientID: process.env.CLIENT_ID || "1168170696493510826", 
    prefix: process.env.PREFIX || "+", 
    ownerID: process.env.OWNER_ID || "1282344443109838903, 1035523468650872883",
    guildID: process.env.GUILD_ID || "1239252627208802375",
    SpotifyID: process.env.SPOTIFY_ID || "aece5b4d7d27426ebef592a75bd43a2c",
    SpotifySecret: process.env.SPOTIFY_SECRET || "79a8a54525324e9aa3291eeb880ff287",
    mongourl: process.env.MONGO_URL || "mongodb+srv://codex-in2:codex-in2@codex-in2.gjv2c.mongodb.net/?retryWrites=true&w=majority",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "1228715828170719253",
    logs1: process.env.LOGS1 || "1228715828170719253",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1228715828170719253",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "1228715828170719253",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER ||"youtube ,youtube music,youtube,soundcloud",
    links: {
        img: process.env.IMG || 'https://media.discordapp.net/attachments/1350476570615087216/1351243557159047280/Picsart_25-03-17_20-42-49-146.jpg?ex=67da53e0&is=67d90260&hm=cc0eff4e9c997925bf9232d779f70e90c0813858e4d4076859f2ca277782ec3a&=&format=webp&width=1162&height=465', 
        support: process.env.SUPPORT || 'https://dsc.gg/nirvax',
        invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=1122883732303511583&permissions=8&scope=applications.commands%20bot' 
    },
    nodes: [
           {
            host: process.env.NODE_HOST || "lava-v3.ajieblogs.eu.org",
            port: parseInt(process.env.NODE_PORT || "443"),
            password: process.env.NODE_PASSWORD || "https://dsc.gg/ajidevserver",
            secure: parseBoolean(process.env.NODE_SECURE || "true"),
            }
           ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}



/*
 * Modified By Gamer CodeX
 * Discord username - ray.dev
 * Youtube - https://www.youtube.com/@GamerCodeX
 * Discord Server - https://dsc.gg/codexdev
 */
