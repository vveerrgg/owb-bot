module.exports = function(skill, info, bot, message, db) {
    bot.api.users.info({user: message.user}, (error, response) => {
    var fuckArray = [
    'off',
    'ing',
    'you',
    'donut',
    'shakespeare',
    'linus',
    'king',
    'chainsaw',
    'outside',
    'madison',
    'yoda',
    'nugget',
    'shutup',
    'think'
    ];
    var randomFuck = Math.floor(Math.random()*fuckArray.length);    
        let {name, real_name} = response.user;
        bot.reply(message, 'http://foaas.com/' + fuckArray[randomFuck] + '/' + name + '/' + bot.identity.name);
    })  
  //bot.reply(message, 'http://foaas.com/everyone/' + bot.identity.name);
  //bot.reply(message, 'I understood this as ' + skill + ', but you haven\'t configured how to make me work yet! Tell your local code monkey to fill in the code module for ' + skill);
};
