
var SlackBot = require('slackbots');

const ENVIROMENT = ['<@U9RDPFXQ9>', '<@U8CFZ96AF>'];
const ELEM_MATH = ['<@U7KSADK47>', '<@UA3DKCPUM>'];
const MID_MATH = ['<@U63S1FYQN>', '<@UB12S6KJT>'];
const HIGH_MATH = ['<@U9VSETB5W>', '<@UAP7DLTA9>'];
const NATIVE = ['<@U9SR492FP>', '<@U6SEBE1U2>'];
const ENGLISH = ['<@U8XMJBC74>', '<@U9WL2QW6L>'];
const uchi  = ['<@U6UHL6Z5F>', '<@U7NCLDEJ3>',];
const help = ['env - Окружающий мир', '\nnative - Русский язык', '\nelmath - Математика начальная школа', '\nmidmath - Математика основная школа','\nhighmath - Математика старшая школа', '\neng - Английский язык', '\nuchi - Учи.ру/Олимпиады']
// create a bot
var bot = new SlackBot({
    token: 'xoxb-2187949909-443799451110-ikGUDzj1GtvA1U37VO91JENx', // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'QaBot'
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
       // icon_emoji: 
    };
    

    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('support_onelove', 'hi!', params);
    bot.on('message', function(data) {
        // all ingoing events https://api.slack.com/rtm
        console.log(data);
    });
//bot.on('error', (err) => console.log(err));

// bot.on('message', (data) => {
//     if(data.type != 'message'){
//         return;
//     }
//     handleMessage(data.text);
// })
// function handleMessage(message) {
//     if (message.includes ('QA'))
//   QA();
 })

 bot.on('message', function(data) {
     
    // all ingoing events https://api.slack.com/rtm
    var temptext = data.text ? data.text.toLowerCase() :'';
    if(temptext.includes('env') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel('support_onelove', `${[...ENVIROMENT]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('elmath') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel('support_onelove', `${[...ELEM_MATH]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('midmath') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel('support_onelove', `${[...MID_MATH]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('highmath') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel('support_onelove', `${[...HIGH_MATH]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('native') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel('support_onelove', `${[...NATIVE]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('eng') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel('support_onelove', `${[...ENGLISH]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('uchi') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel('support_onelove', `${[...uchi]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('help') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel('support_onelove', `${[...help]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }

});
 




