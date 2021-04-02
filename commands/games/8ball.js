const Discord = require("discord.js");

module.exports = {
  name: '8ball',
  aliases: [],
  category: 'games',
  utilisation: '{prefix}8ball (question)',

  execute(client, message, args) {

    if (!args[1]) return message.reply("please ask a full question");
    let replies = ["yeah i think so", "im hungry rn ask me in like five min", "pfff im not going to tell you that LOL", "idk man", "what?", "idk man i wouldnt count on that", "oh yeah definitely", "for sure"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag)
      .setColor("RANDOM")
      .addField("Question", question)
      .addField("Answer", replies[result]);

    message.channel.send(ballembed)



  }
}
