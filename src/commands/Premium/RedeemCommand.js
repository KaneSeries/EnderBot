const BaseCommand = require('../../utils/structures/BaseCommand');
const codes = require('./codes.json')
const Discord = require('discord.js')

module.exports = class RedeemCommand extends BaseCommand {
  constructor() {
    super('redeem', 'Premium', []);
  }

  run(client, message, args) {
  let successfull = new Discord.MessageEmbed()
        .setTitle("✔️ Successful ✔️")
        .setColor("GREEN")
        .setDescription("Your premium bot access was successfuly redeemed! Thank you for purchasing!")
        .setFooter("You now have access to all commands")
        .setThumbnail('https://cdn.discordapp.com/attachments/793634316844138506/793956002579349504/check-mark-button-emoji-clipart-md.png')
  let expired = new Discord.MessageEmbed()
  .setTitle("❌ EXPIRED ❌")
  .setDescription('The code you have entered is expired. Please try to redeem a new one')
  
    //EXPIRE CODE
    
    //REEDEEM CODE

    var codes = {
      "dev_code": "3poCqXH3FoTMpZu1oZhxUrXmb6DdMM5f79HxKbjyP20E3Qp48",
      "user_code1": "AM}C0wyIuWX}R)``^;y<8GuI,_NXe-N%4WD/[+)h6&e`8yS^DF",
      "user_code2": "uUGRQzbbkQfYe8GiGEmBDik1LN8pqhS78Rcosz02jgSKSA5D7t",
      "user_code3": "HXWuvNXk14YPUnd1S7oOGil4XwnwV7YKTmzWFkDI7h3ZqJetDP",
      "user_code4": "YppfxOckVTYdguJnRCOhBmW9aWMdIqzmxyiAp7o2dWH463gceQ",
      "user_code5": "3cONEmX6o14jp25x2m8yK0pQHKt3CCVMPTMv7hBuEQMZk2rJwS"
    }

    //REDEEM FUNCTION
    if(!args[0]==codes){
      message.channels.send('Error')
    }


    //CHECK VALIDATION
      //DEV PERMIUM

      var used = Boolean;
      if (args[0] == '3poCqXH3FoTMpZu1oZhxUrXmb6DdMM5f79HxKbjyP20E3Qp48') {
        message.channel.send("Proccessing...").then(expire_cd1 => { 
         var try_code = [args[0]]

          if(try_code.includes(args[0])) return message.channel.send(expired);

        
          console.log(args[0] + " has expired")  //LOG CONFIRM
          
          if(expired_codes.includes(args[0])){  //CHECK IF EXPIRED

          message.channel.send(expired) //SEND EXPIRED MESSAGE

      } else{     //IF NOT EXPIRED
         used = true;  //SET BOOL VALUE TO TRUE

         var expired_codes = [args[0]]   //ADD CODE TO EXPIRED LIST

        message.channel.send(successfull)

        return;
      
    } 
  


        })
      
      }

  }
} 