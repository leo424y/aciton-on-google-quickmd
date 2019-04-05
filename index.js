'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});
    function fun1(m, d){ 

        if(m==1){
            if(d>=20&&d<=31){
                return '水瓶座';
            }
        }
        if(m==2){
            if(d>=1&&d<=18){
                return '水瓶座';
            }
        }
        //双鱼座2.19-3.20
        if(m==2){
            if(d>=19&&d<=31){
                return '雙魚座';
            }
        }
        if(m==3){
            if(d>=1&&d<=20){
                return '雙魚座';
            }
        }
 
        // 白羊座3.21-4.19
        if(m==3){
            if(d>=21&&d<=31){
                return '牡羊座';
            }
        }
        if(m==4){
            if(d>=1&&d<=19){
                return '牡羊座';
            }
        }
 
        //金牛座4.20-5.20
        if(m==4){
            if(d>=20&&d<=31){
                return '金牛座';
            }
        }
        if(m==5){
            if(d>=1&&d<=20){
                return '金牛座';
            }
        }
 
        //双子座5.21-6.21
        if(m==5){
            if(d>=21&&d<=31){
                return '雙子座';
            }
        }
        if(m==6){
            if(d>=1&&d<=21){
                return '雙子座';
            }
        }
 
        //巨蟹座6.22-7.22
        if(m==6){
            if(d>=22&&d<=31){
                return '巨蟹座';
            }
        }
        if(m==7){
            if(d>=1&&d<=22){
                return '巨蟹座';
            }
        }
 
        //狮子座7.23-8.22
        if(m==7){
            if(d>=23&&d<=31){
                return '獅子座';
            }
        }
        if(m==8){
            if(d>=1&&d<=22){
                return '獅子座';
            }
        }
 
        //处女座8.23-9.22
        if(m==8){
            if(d>=23&&d<=31){
                return '處女座';
            }
        }
        if(m==9){
            if(d>=1&&d<=22){
                return '處女座';
            }
        }
 
        //天枰座9.23-10.23
        if(m==9){
            if(d>=23&&d<=31){
                return '天秤座';
            }
        }
        if(m==10){
            if(d>=1&&d<=23){
                return '天秤座';
            }
        }
 
        //天蝎座10.24-11.22
        if(m==10){
            if(d>=24&&d<=31){
                return '天蝎座';
            }
        }
        if(m==11){
            if(d>=1&&d<=22){
                return '天蝎座';
            }
        }
 
        //射手座11.23-12.21
        if(m==11){
            if(d>=23&&d<=31){
                return '射手座';
            }
        }
        if(m==12){
            if(d>=1&&d<=21){
                return '射手座';
            }
        }

        //摩羯座12.22-1.19
        if(m==12){
            if(d>=22&&d<=31){
                return '摩羯座';
            } 
        }
        if(m==1){
            if(d>=1&&d<=19){
                return '摩羯座';
            }
        }
 }
    


app.intent('make_name', (conv, {number, number1}) => {
  conv.close(`棒棒，你的生日是${number}月${number1}日，星座是${fun1(number,number1)}!`);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
