
let SlackBot = require('slackbots');

const enviroment = ['<@U9RDPFXQ9>', '<@U8CFZ96AF>'];
const elem_math = ['<@U7KSADK47>', '<@UA3DKCPUM>'];
const mid_math = ['<@U63S1FYQN>', '<@UB12S6KJT>'];
const high_math = ['<@U9VSETB5W>', '<@UAP7DLTA9>'];
const native = ['<@U9SR492FP>', '<@U6SEBE1U2>'];
const english = ['<@U8XMJBC74>', '<@U9WL2QW6L>'];
const uchi  = ['<@U6UHL6Z5F>', '<@U7NCLDEJ3>',];
const help = ['env - Окружающий мир', '\nnative - Русский язык', '\nelmath - Математика начальная школа', '\nmidmath - Математика основная школа','\nhighmath - Математика старшая школа', '\neng - Английский язык', '\nuchi - Учи.ру/Олимпиады'];
const channel = 'support';

require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
});
let reqTimer = setTimeout(function wakeUp() {
    request("https://nameless-gorge-19527.herokuapp.com", function() {
       console.log("WAKE UP DYNO");
    });
    return reqTimer = setTimeout(wakeUp, 1200000);
 }, 1200000);
// const express = require('express');
// const path = require('path');
// const PORT = process.env.PORT || 5000;

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));


// create a bot on  //banana
let bot = new SlackBot({
    token: 'xoxb-2187949909-443799451110-ikGUDzj1GtvA1U37VO91JENx'
});
    //token: 'xoxb-2187949909-443799451110-ikGUDzj1GtvA1U37VO91JENx', //uchi.ru
    // token:'xoxb-429903089909-434388194016-jnwIBKRv7QfkYL4SGHdwNjgH' banana

// bot.on('start', function() {
//     // more information about additional params https://api.slack.com/methods/chat.postMessage
//     var params = {
//        // icon_emoji: 
//     }; 
//  })

 bot.on('message', function(data) {
     
    // all ingoing events https://api.slack.com/rtm
    var temptext = data.text ? data.text.toLowerCase() :'';
    if(temptext.includes('env') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel(channel, `${[...enviroment]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('elmath') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel(channel, `${[...elem_math]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('midmath') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel(channel, `${[...mid_math]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('highmath') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel(channel, `${[...high_math]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('native') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel(channel, `${[...native]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('eng') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel(channel, `${[...english]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('uchi') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel(channel, `${[...uchi]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }
    if(temptext.includes('help') && temptext.indexOf('[qa]')==0){
        console.log(data);
        bot.postMessageToChannel(channel, `${[...help]}`,{
            thread_ts: data.ts,
            // user: data.user
        }); 
    }

});
 


   
    // define channel, here bot exist. You can adjust it there https://my.slack.com/services 
    // bot.postMessageToChannel('support_onelove', params);
    // bot.on('message', function(data) {
    //     // all ingoing events https://api.slack.com/rtm
    //     console.log(data);
    // });
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

