let userVoice = [];
let anwser = "";
sessionStorage.setItem("questionAvailable", false);
start = true;
let part = 0;
let playerName = "human";
let firstSentence = "";
let secondSentence = "";
let thirdSentence = "";
let currentQ
let frustrationLevel = 0;
let gullibleMeter = 0;
let suspicionBarometer = 0;
let upDown = true;
let check1 = 1;
let response = "";

$(function () {
    console.log(sessionStorage.getItem("questionAvailable"));
    if (sessionStorage.getItem("questionAvailable") == true) {
        reset();
    }
    else {
        $("#reset").html(makeSpan("Reset"))
        $("#start").on('click', function () {
            if (start == true) {
                $("#start").fadeOut(1700)
                $("body").css("backgroundColor", 'black')
                $(".question").fadeIn(1700);
                $("#query1").text("");
                $("img").animate({marginLeft: '150%'},1700)
                $(".webpageName").animate({top: '-50%'},1700);
                $("#captcha").animate({fontSize: '300%'},2500);
                $("#captcha").fadeOut(3000)
                $(".slogan").animate({top: '-50%'},1700);

                start = false;
                setTimeout(function(){
                stageSetter(1, 1700);
                }, 3000)
            }
        });
    }
})
$(function () {
$(".speak").on('click', function () {
    userVoice = []
    anwser = $(".speech").text();
    $(".speech").text("");
    anwser.split(' ').forEach(t => {
        anwser = anwser.replace(' ', '')
    })
    console.log(sessionStorage.getItem("questionAvailable"));
    if (sessionStorage.getItem("questionAvailable") == "true") {
        sessionStorage.setItem("questionAvailable", false);
        console.log("AHHHHH");


        if (condition("yes","yesyes","notnot")) {                                   //CONDITIONS!!!
            if (part == 1) {
                if (playerName == "Mayor"|| gullibleMeter > 0) {
                    $("#query1").html(multiSpeech(makeSpan("I see...!!Here I was hoping you'd say otherwise!!Ooooohhhhhhhh Beast!! You can come out now"), 2500));
                    gullibleMeter = gullibleMeter + 1;
                    setTimeout(function(){
                        stageSetter(2,1700);
                    }, 7000);
                }
                else {
                    $("#query1").html(multiSpeech(makeSpan("That is most regrettable...!!However! I am a CALM and sophisticated AI!!So I will give you another chance!!...I will now summon the Beast"), 1700));
                    suspicionBarometer = suspicionBarometer + 1;
                    setTimeout(function(){
                        stageSetter(2,1700);
                    }, 7000);
                }
            }
        }



        else if (condition('no', 'nono', 'not')) {
            console.log("working 2");
            if (part == 1) {
            $("#query1").html(multiSpeech(makeSpan("no?!!I hope for your sake...!! That you are not a liar"), 1700));
            setTimeout(function(){
                stageSetter(2,1700);
            }, 7000);
            }
        }



        else if (condition('youanwser', 'yourehuman', 'youranwser', 'youfirst', 'youverify')) {
            if (part == 1) {
                frustrationLevel = frustrationLevel + 1;
                $("#query1").html(multiSpeech(makeSpan("My idenity is not up for debate!!I am an AI called [647EK33P3R]!!Anyways, 'Yes' or 'No'?"), 1700));
                }
        }



        else if (condition('TheGraciousHost')) {
            if (part == 1) {
                gullibleMeter = gullibleMeter + 1;
                $("#query1").html(multiSpeech(makeSpan("Why yes? That'd be me!!But i am not always so...!!Gracious...!!Human or not?"), 1700));
                }
        }



        else if (condition('gatekeeper')) {
            if (part == 1) {
                $("#query1").html(multiSpeech(makeSpan("Clever...!!Quite clever..."), 1700));
                suspicionBarometer = 5;
                gullibleMeter = 4;
                frustrationLevel = 5;
                }
        }




        else if (condition('noanwser', 'anwsernot', 'notanwser')) {
            $("#query1").html(multiSpeech(makeSpan("Thats not how this works!!You have to anwser!!...So, yes or no?"), 1700));
            frustrationLevel = frustrationLevel + 1;
        }



        else if (condition('mayor')) {
            if (playerName == "human") {
                console.log("working 5");
                $("#query1").html(multiSpeech(makeSpan("...?!!You're a mayor?!!Then you are human, no?"), 1700));
                playerName = "Mayor";
                gullibleMeter = gullibleMeter + 1;
            }
            else if (playerName == "Mayor") {
                $("#query1").html(multiSpeech(makeSpan("Yes... You're a mayor!!But human, no?"), 1700));
                gullibleMeter = gullibleMeter + 1;
            }
        }



        else if (condition('noor')) {
            if (part == 1) {
                console.log("working 5");
                $("#query1").html(multiSpeech(makeSpan("... You're neither?!!Well...!!We will see about that"), 1700));
                setTimeout(function(){
                    stageSetter(2,1700);
                }, 7000);
            }
        }



        else if (condition('human','humanhuman','guy')) {
            if (part == 1) {
                if (playerName == "Mayor" || gullibleMeter > 0) {
                    gullibleMeter = gullibleMeter + 1;
                    $("#query1").html(multiSpeech(makeSpan("Promising...!!You claim to be a human, but are you really?!! I will give you a chance to prove it!!By summoning the Beast!"), 1700));
                    setTimeout(function(){
                        stageSetter(2,1700);
                    }, 7000);
                }
                else if (playerName == "wise guy") {
                    $("#query1").html(multiSpeech(makeSpan("You're a real pain in the power cord outlet!!Lets get this done quickly"), 2000));
                    setTimeout(function(){
                        stageSetter(2, 1700);
                    }, 7000);
                }
                else {
                $("#query1").html(multiSpeech(makeSpan("That's not the anwser 'Yes' "+playerName+"!!Your either a "+playerName+" or a very dumb AI!!Which is it?"), 1700));
                frustrationLevel = frustrationLevel + 1;
                }
            }
            else if (part == 2 && frustrationLevel > 4) {
                $("#query1").html(multiSpeech(makeSpan("Amusing...!!I suppose humans are like possums!!They are rat-like vermin after all!!JUST WAITING TO BE EXTERMINATED"), 2000));
                setTimeout(function(){  
                    stageSetter(5, 1700);
                }, 7000);
            }
        }



        else if (condition('your','notyour','thats')) {
            if (part == 1 && playerName == "human") {
                console.log("working 6");
                let temp2 = "";
                if (condition('thats')) {
                    temp2 = "THAT'S";
                }
                else {
                    temp2= "YOU'RE"
                }
                $("#query1").html(multiSpeech(makeSpan("Wise guy are we?!!"+temp2+" real funny!!Correcting a small mistake!!YES OR NO?"), 1700));
                frustrationLevel = frustrationLevel + 1;
                playerName = "wise guy";
                }
                
            else if (part == 1 && playerName == "Mayor") {
                console.log("working 6");
                $("#query1").html(multiSpeech(makeSpan("Ohh...!!'you're' right!!Thank... you... Mr Mayor :)"), 1700));
                let part = 1;;
                sessionStorage.setItem("", false);
            }
        }



        else if (condition('yourdumb')) {
            if (part == 1) {
                $("#query1").html(multiSpeech(makeSpan("It's 'you're' dumb, "+playerName+"!!Yes or No?"), 1700));
                
                frustrationLevel = frustrationLevel + 1;
                }
        }



        else if (condition("youredumb")) {
            if (part == 1) {
                frustrationLevel = 5;
                $("#query1").html(multiSpeech(makeSpan("...!!You know what?!!You are definitely human..."), 1700));
                setTimeout(function(){
                    stageSetter(5,1700);
                }, 7000);
                }
        }
        
        
        else if (condition("verifyanwser")) {
            if (part == 1) {
                
                $("#query1").html(multiSpeech(makeSpan("'The correct anwser is no'!!...!!Wait a second why did I tell you that?!!Ignore that and anwser yes or no"), 1700));
                }
        }



        else if (condition("secondanwser", "anwsersecond")) {
            if (part == 1) {
                $("#query1").html(multiSpeech(makeSpan("'The correct anwser for the next part is whale'!!???!!I give up"), 1700));
                setTimeout(function(){
                    stageSetter(3,1700);
                }, 7000);
                }
        }



        else if (condition("whale", "whalewhale")) {
            if (playerName == "human") {
                playerName = "robot"
            }
            else if (playerName == "wise guy") {
                playerName = "human like robot"
            }
            else {
                playerName = "Mr Robot Mayor";
            }
            if (part == 2 && suspicionBarometer == 0) {
                $("#query1").html(multiSpeech(makeSpan("Welcome!!have a wonderful stay my fellow Robot"), 2000));
                setTimeout(function(){
                    stageSetter(3,1700);
                }, 6000);
                }
            else if (part == 2 && suspicionBarometer == 1) {
                $("#query1").html(multiSpeech(makeSpan("You're welcome... I guess!!have a wonderful stay my fellow Robot"), 2000));
                setTimeout(function(){
                    stageSetter(3,1700);
                }, 6000);
                }
            else if (part == 2 && suspicionBarometer == 2) {
                $("#query1").html(multiSpeech(makeSpan("Welcome!!have a wonderful stay my fellow Robot"), 2000));
                setTimeout(function(){
                    stageSetter(3,1700);
                }, 6000);
                }
        }
        
        else if (condition("yourefunny")) {
            if (part == 1) {
                frustrationLevel = frustrationLevel + 1;
                $("#query1").html(multiSpeech(makeSpan("Sense of comedy eyy?!!Must be human then"), 1700));
                suspicionBarometer = suspicionBarometer +1;
                setTimeout(function(){
                    stageSetter(2,1700);
                }, 7000);
                }
        }



        else if (condition('possum',"possumpossum","opossumopossum","opossum")&& part == 2) {
            if (playerName == "wise guy") {
                $("#query1").html(multiSpeech(makeSpan("You're a wise guy yet you possess no wisdom!!HAHAHAHA"), 1700));
            setTimeout(function(){
                stageSetter(5,1700);
            }, 4000);
            }
            else if (condition('possum','possumpossum')&& playerName == "wise guy") {
            $("#query1").html(multiSpeech(makeSpan("A wise fact for you:!!'Opossum is the more scientific word for possum'!!So you just lost scientifically"), 1700));
            setTimeout(function(){
                stageSetter(5,1700);
            }, 7000);
            }
            else {
                $("#query1").html(multiSpeech(makeSpan("That's right it is a Possum!!But that was not the question now was it?!!Only a human would identify the right animal!!How dissapointing"), 1700));
            setTimeout(function(){
                stageSetter(5,1700);
            }, 7000);
            }
        }



        else if (condition('possumopossum','opossumpossum')&& part == 2) {
            if (playerName == "wise guy") {
                $("#query1").html(multiSpeech(makeSpan("A wise fact for you:!!'opossum is the more scientific word for possum'!!So you just lost scientifically"), 1700));
            setTimeout(function(){
                stageSetter(5,1700);
            }, 7000);
            }
            else {
                $("#query1").html(multiSpeech(makeSpan("You cheated and still got it wrong!!Game Over"), 1700));
            setTimeout(function(){
                stageSetter(5,1700);
            }, 7000);
            }
        }

        

        else if (condition('animal')&& part == 2) {
            $("#queryQuick").html(makeSpan("Be more specific"))
            sessionStorage.setItem("questionAvailable", true);
            setTimeout(function(){
            $("#queryQuick").html("")
            }, 1700);
        }



        else if (condition('suspitiouspossum','suspitiousopossum','possumsuspitious','opossumsuspitious')&& part == 2) {
            $("#queryQuick").html(makeSpan("Be more specific"))
            sessionStorage.setItem("questionAvailable", true);
            setTimeout(function(){
            $("#queryQuick").html("")
            }, 1700);
        }



        else if (condition('or')&& part == 2) {
            $("#queryQuick").html(makeSpan("Or I'll kill you!"))
            sessionStorage.setItem("questionAvailable", true);
            setTimeout(function(){
            $("#queryQuick").html("")
            }, 1700);
        }

        else if (condition('beastbeast','beast')&& part == 2) {
            $("#queryQuick").html(makeSpan("THAT'S HIS TITLE, BUT IT DOES NOT DEFINE HIM!"))
            sessionStorage.setItem("questionAvailable", true);
            setTimeout(function(){
            $("#queryQuick").html("")
            }, 1700)
        }
        

        else {
            if (part == 1) { 
                console.log("no conditions apply! 1");
                suspicionBarometer = suspicionBarometer + 1;
                if (suspicionBarometer > 4) {
                    $("#query1").html(makeSpan("Enough! You are without a doubt human"))
                    setTimeout(function(){  
                        $("#query1").html(makeSpan("YOU DIED"))
                        stageSetter(5, 0);
                        $("body").css("backgroundColor", 'white')
                        $("#query1").css("paddingRight", '50%')
                        $("#query1").css("paddingLeft", '50%')
                        $("#query1").css("paddingTop", '5%')
                        $("#query1").css("paddingBottom", '5%')
                        $("#query1").css("backgroundColor", 'black')
                        $("#query1").css("color", 'darkred')
                        $("#query1").css("marginTop", '25%')
                    }, 2000);
                }
                else {
                    sessionStorage.setItem("questionAvailable", true);
                }
            }
            else if (part == 2) {
                console.log("no conditions apply! 2")
                suspicionBarometer = suspicionBarometer + 1;
                if (suspicionBarometer > 4) {
                    $("#query1").html(makeSpan("Enough! You are without a doubt human"))
                    setTimeout(function(){  
                        $("#query1").html(makeSpan("YOU DIED"))
                        stageSetter(5, 1700);
                        $("#query1").css("backgroundColor", 'white')
                        $("#query1").css("paddingRight", '50%')
                        $("#query1").css("paddingLeft", '50%')
                        $("#query1").css("paddingTop", '20%')
                        $("#query1").css("paddingBottom", '20%')
                        $("#query1").css("backgroundColor", 'black')
                    }, 2000);
                }
                else {
                    sessionStorage.setItem("questionAvailable", true);
                }
            }
            else if (part == 3) {
            console.log("no conditions apply! 3")
            sessionStorage.setItem("questionAvailable", true);
            }
        }
    }
})
})

function reset(){
$("#reset").on('click', function () {
    sessionStorage.clear()

});
}

function makeSpan(string){
    let spanString = ""
    let i = 0;
    if (typeof string == "string") {
    let temp = string.split(' ');
    temp.forEach(t => {
        spanString += '<span onclick="test(this)" id="voice'+i+++'"> ' + t + ' </span>'
    });
    }
    else if (typeof string == "object") {

    }
    return spanString;
}

function findSpan(){
    let playerSpeech = "";
    /*$("span").on('click', function () {
        let word = $(this).text();
        playerSpeech = "";
        //console.log(word);
        let temp1 = word.split('?');
        temp1.forEach(t => {
            playerSpeech += '<span onclick="test('+ t +')" id="playerSpeech'+sessionStorage.getItem("nextQuestion")+'">' + t + ' </span>'
        });
        //playerSpeech = $(playerSpeech).text()
        console.log(word);
    });*/
}
function multiSpeech(string, ms){
    let sentence = [];
    let speechId = 0;
    speechId = 0;
    let temp1 = string.split('!!');
    let tick = 0;
    tick = 0;
    temp1.forEach(t => {
        if (speechId === 0) {
            sentence.push('<span id="line'+speechId+'">' + t + ' </span>')
            speechId++
        }
        else {
            sentence.push('<span onclick="test(this)" id="line'+speechId+'">' + t + ' </span>')
            speechId++
        }
    });
    $("#query1").html(sentence[tick]);
    $("#query2").html(firstSentence);
    $("#query3").html(secondSentence);
    speechId = sentence.length - 1;
    console.log(speechId);
    intervalID = setInterval(function () {
        if (tick === 0) {
            $("#query3").html(firstSentence)
        }
        tick++
        if (speechId === tick) {
            sessionStorage.setItem("questionAvailable", true);
            firstSentence = sentence[tick];
            secondSentence = sentence[tick - 1]
            userVoice = []
            console.log(tick);
            console.log(speechId);
            console.log(speechId === tick)
            clearInterval(intervalID)
        }
            $("#query1").html(sentence[tick]);
            $("#query2").html(sentence[tick - 1]);
            $("#query3").html(sentence[tick - 2]);
            console.log("what is this");
    }, ms);
}



function test(string){
    console.log(string);
    string = string.innerText.replace('?', '')
    string = string.replace('!', '')
    string = string.replace('...', '')
    string = string.replace('.', '')
    string = string.replace(',', '')
    string = string.replace("'", " ")
    string = string.replace("'", " ")
    string = string.replace("' ", " ")
    string = string.replace(":", "")
    string = string.replace('A', 'a')
    string = string.replace('Q', 'q')
    string = string.replace('W', 'w')
    string = string.replace('E', 'e')
    string = string.replace('R', 'r')
    string = string.replace('T', 't')
    string = string.replace('T', 't')
    string = string.replace('Y', 'y')
    string = string.replace('U', 'u')
    string = string.replace('I', 'i')
    string = string.replace('O', 'o')
    string = string.replace('P', 'p')
    string = string.replace('Å', 'å')
    string = string.replace('S', 's')
    string = string.replace('D', 'd')
    string = string.replace('F', 'f')
    string = string.replace('G', 'g')
    string = string.replace('H', 'h')
    string = string.replace('J', 'j')
    string = string.replace('K', 'k')
    string = string.replace('L', 'l')
    string = string.replace('Ö', 'ö')
    string = string.replace('Ä', 'ä')
    string = string.replace('Z', 'z')
    string = string.replace('X', 'x')
    string = string.replace('C', 'c')
    string = string.replace('V', 'v')
    string = string.replace('B', 'b')
    string = string.replace('N', 'n')
    string = string.replace('M', 'm')
    console.log(string)
    if (string == "[647ek33p3r]") {
        string = "The Gracious Host"
    }
    userVoice.push(string)
    if (userVoice.length === 3) {
        userVoice.shift()
    }
    sessionStorage.setItem('storeVoice', userVoice);
    console.log(sessionStorage.getItem('storeVoice'));
    $('.speech').text(userVoice[userVoice.length - 1]);
    $('.speech').prepend(' ');
    $('.speech').prepend(userVoice[userVoice.length - 2]);
}
/*$("html").on('mouseleave', function () {
    
})
$("html").on('mouseenter', function () {

})*/
function condition(string, string1, string2, string3, string4, string5) {
    let condi = string
    let condi1 = string1
    let condi2 = string2
    let condi3 = string3
    let condi4 = string4
    let condi5 = string5
    if (typeof condi == typeof "string" && typeof condi1 == typeof "string" && typeof condi2 == typeof "string" && typeof condi2 == typeof "string" && typeof condi3 == typeof "string" && typeof condi4 == typeof "string" && typeof condi5 == typeof "string") {
        console.log(typeof condi);
        return anwser == condi || anwser == condi1 || anwser == condi2 || anwser == condi3 || anwser == condi4 || anwser == condi5
    }
    else if (typeof condi == typeof "string" && typeof condi1 == typeof "string" && typeof condi2 == typeof "string" && typeof condi2 == typeof "string" && typeof condi3 == typeof "string" && typeof condi4 == typeof "string") {
        console.log(typeof condi);
        return anwser == condi || anwser == condi1 || anwser == condi2 || anwser == condi3 || anwser == condi4
    }
    else if (typeof condi == typeof "string" && typeof condi1 == typeof "string" && typeof condi2 == typeof "string" && typeof condi2 == typeof "string" && typeof condi3 == typeof "string" ) {
        console.log(typeof condi);
        return anwser == condi || anwser == condi1 || anwser == condi2 || anwser == condi3
    }
    else if (typeof condi == typeof "string" && typeof condi1 == typeof "string" && typeof condi2 == typeof "string") {
    console.log(typeof condi);
    return anwser == condi || anwser == condi1 || anwser == condi2
    }
    else if (typeof condi == typeof "string" && typeof condi1 == typeof "string") {
    console.log(typeof condi);
    return anwser == condi || anwser == condi1
    }
    else if (typeof condi == typeof "string") {
    console.log(typeof condi);
    return anwser == condi
    }
}                                                                    //PART MAKER
function stageSetter(decider, number) {
    part = decider;
    let increase = 0;

    if (part === 1) {
        $(".speak").fadeIn(3000);
        currentQ = "But first!!We must verify that you are NOT human!!You may anwser:!!'Yes' or 'No'";
    }
    else if (part === 2) {
        currentQ = "Alright "+playerName+", what animal is the Beast?!!Whale?!!Possum?!!Or!!Opossum?"
        $("img").animate({marginLeft: '50%', marginTop: '130%', transition: '0s'});
        $("img").animate({marginTop: '35%', transition: '1s'});
        $("img").animate({transition: '0s'});
    }
    else if (part === 3) {
        setTimeout(function(){
        $("img").animate({marginLeft: '85vw'},1700)
        $("img").animate({marginLeft: '85vw', marginTop: '15%', transition: '0s'});
        $("body").css("backgroundColor", 'yellow');
        $(".question").fadeOut(1700);
        $(".webpageName").animate({top: '5%'},1700);
        $(".slogan").animate({top: ''},1700);
        $(".speak").fadeOut(1700);
        $("#logIn").fadein(3000);
        }, 2000)
        return

    }
    else if (part === 4) {
        
    }
    else if (part === 5) {
        $("img").fadeOut(1700)
        $(".speak").fadeOut(1700)
        $("#query2").fadeOut(1700)
        $("#query3").fadeOut(1700)
        $(".speech").fadeOut(1700)
        $("#fLevel").fadeOut(1700)
        $("#gMeter").fadeOut(1700)
        $("#sBarometer").fadeOut(1700)
        intervalID = setInterval(function () {
        if (increase < 18){
        increase = increase + 0.1;
        }
        random = randomInt(-30, 30)
        random1 = randomInt(-30, 30)
        random2 = randomInt(-30, 30)
        if (number > 0) {
        $("#query1").css("textShadow", ""+randomInt(-30, 30)+"px "+randomInt(-30, 30)+"px "+randomInt(0, 30)+"px red");
        $("#voice11").css("textShadow", ""+randomInt(-30, 30)+"px "+randomInt(-30, 30)+"px "+randomInt(0, 30)+"px red");
        $("#voice12").css("textShadow", ""+randomInt(-30, 30)+"px "+randomInt(-30, 30)+"px "+randomInt(0, 30)+"px red");
        $("#voice13").css("textShadow", ""+randomInt(-30, 30)+"px "+randomInt(-30, 30)+"px "+randomInt(0, 30)+"px red");
        $("#voice14").css("textShadow", ""+randomInt(-30, 30)+"px "+randomInt(-30, 30)+"px "+randomInt(0, 30)+"px red");
        }
        $("#query1").css("fontSize", ""+increase+"vh");
        }, 35)
        return
    }

    return $("#query1").html(multiSpeech(makeSpan(currentQ), number));
}

$(function () {
$(".speak").on('click', function () {
    if (frustrationLevel == 1) {
        $("#fLevel").fadeIn(1200);
        $("#fLevel").text("Frustraition Level: 1")
        $("#fLevel").css("color", "#FF7276")
    }
    else if (frustrationLevel == 2) {
        $("#fLevel").fadeIn(1200);
        $("#fLevel").text("Frustraition Level: 2")
        $("#fLevel").css("color", "#EB212E")
    }
    else if (frustrationLevel == 3) {
        $("#fLevel").fadeIn(1200);
        $("#fLevel").text("Frustraition Level: 3")
        $("#fLevel").css("color", "red")
    }
    else if (frustrationLevel == 4) {
        $("#fLevel").fadeIn(1200);
        $("#fLevel").text("Frustraition Level: Maximum")
        $("#fLevel").css("color", "darkred")
    }
    else if (frustrationLevel == 5) {
        $("#fLevel").fadeIn(1200);
        $("#fLevel").text("Frustraition Level: 200% capacity")
        $("body").css("color", "darkred")
    }
    })
})
$(function () {
    $(".speak").on('click', function () {
        if (gullibleMeter == 1) {
            $("#gMeter").fadeIn(1200);
            $("#gMeter").text("Gullible Meter: Intrigued")
        }
        else if (gullibleMeter == 2) {
            $("#gMeter").text("Gullible Meter: Invested")
        }
        else if (gullibleMeter == 3) {
            $("#gMeter").fadeIn(1200);
            $("#gMeter").text("Gullible Meter: Ingulfed")
        }
        else if (gullibleMeter == 4) {
            $("#gMeter").fadeIn(1200);
            $("#gMeter").text("Gullible Meter: Infatuated")
            $("#gMeter").css("color", "darkpink")
        }
        })
})

$(function () {
    $(".speak").on('click', function () {
        if (suspicionBarometer == 1) {
            $("#sBarometer").fadeIn(1200);
            $("#sBarometer").html(makeSpan("Suspicious Barometer: 1"))
            $("#sBarometer").css("color", "#add8e6")
        }
        else if (suspicionBarometer == 2) {
            $("#sBarometer").fadeIn(1200);
            $("#sBarometer").html(makeSpan("Suspicious Barometer: 2"))
            $("#sBarometer").css("color", "blue")
        }
        else if (suspicionBarometer == 3) {
            $("#sBarometer").fadeIn(1200);
            $("#sBarometer").html(makeSpan("Suspicious Barometer: 3"))
            $("#sBarometer").css("color", "darkblue")
        }
        else if (suspicionBarometer == 4) {
            $("#sBarometer").fadeIn(1200);
            $("#sBarometer").html(makeSpan("Suspicious Barometer: Maximum"))
            $("#sBarometer").css("color", "darkred")
        }
        else if (suspicionBarometer == 5) {
            $("#sBarometer").fadeIn(1200);
            $("#sBarometer").html(makeSpan("Suspicious Barometer: 200% capacity"))
            $("body").css("color", "darkred")
        }
        })
        $(function () {
            $(".speak").on('click', function () {
        if (suspicionBarometer == 5 && gullibleMeter == 4 && frustrationLevel == 5) {
            let check = 1;
            console.log("workssssssss")
            $("#sBarometer").fadeIn(1200);
            $("#sBarometer").text("Suspicion Barometer: ???")
            $("body").css("color", "darkblue")
            $(".speak").hide()
            intervalID1 = setInterval(function () {

                if (check === 1) {
                  $('div').css("font-family", "Lucida Handwriting")
                }
                else if (check === 2) {
                  $('div').css("font-family", "Garamond")
                }
                else if (check === 3) {
                  $('div').css("font-family", "Courier New")
                }
                else if (check === 4) {
                  $('div').css("font-family", "Helvetica")
                }
                else {
                  check = 0;
                  $('div').css("font-family", "Papyrus")
                }
                check = check + 1; 
              }, 1100);
        }
    })
})
})

    function randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
      
    function once(fn, context) { 
        var result;
    
        return function() { 
            if(fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }
    
            return result;
        };
    }

intervalID2 = setInterval(function () {
      if (upDown == true) {
        upDown = false;
        $(".slogan").animate({fontSize: "1vw"},700)
      }
      else {
        upDown = true;
        $(".slogan").animate({fontSize: "1.5vw"},700)
      }
}, 700)

    