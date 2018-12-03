const Discord = require("discord.js");
const client = new Discord.Client();






client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('ab3ate')){
if(!message.author.id === '489379054584201247') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By, DEX`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`كل يوم حسابات | Netflex`,"http://www.twitch.tv/KiNg66S")
client.user.setStatus("dnd")
});




client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**
شكرا لاضافتك البوت 
التعليمات وكل شي واضح
بس ضيف البوت لسيرفر وتحصل يوميا على روابط كثيرة كل رابط في حسابات كثيرة 
 السيرفر الرسمي للبوت**`
"https://discord.gg/grWJEyX" )

      guild.owner.send(embed)
});







client.login(process.env.BOT_TOKEN);
