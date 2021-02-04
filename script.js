(function() {
    'use strict';
    var Segundos = 4;
    var Speak = false;
    var lastLeitura = new Array();
    var Msg = new SpeechSynthesisUtterance();
    Msg.lang = "pt";
    Msg.onend = async function (event) {
        Speak=false;
        await sleep(Segundos*1000);
        Start();
    };
    window.onload = function() {
        if (!window.jQuery) {
            // jQuery is loaded
            var script = document.createElement('script');
            script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
            script.type = 'text/javascript';
            document.getElementsByTagName('head')[0].appendChild(script);
            Start();
        }
    }

    // jQuery is loaded
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
    Start();



    async function Start(){
        if(!Speak){
            let ChatTxt = $(".nimo-room__chatroom__message-item").map(function(index){
                return $(this).text()
            });
            for(let cont=0;cont<ChatTxt.length;cont++){
                if(!lastLeitura.includes(ChatTxt[cont])){
                    Speak = true;
                    Msg.text = ChatTxt[cont];
                    lastLeitura.push(ChatTxt[cont]);
                    speechSynthesis.speak(Msg);
                    return 0;
                }
            }
        }
        await sleep(Segundos*1000);
        Start();
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    // Your code here...
})();
