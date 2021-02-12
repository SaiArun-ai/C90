    var get_word = "";
    var pL1n = localStorage.getItem("p1n");
    var pL2n = localStorage.getItem("p2n");
    if(pL1n = localStorage.getItem("p1n")){
        console.log("Works");
    }
    var score1 = 0;
    var score2 = 0;
    document.getElementById("p1name").innerHTML = pL1n + " : " + score1;
    document.getElementById("p2name").innerHTML = pL2n + " : " + score2;

    //Player Chances

    document.getElementById("pq").innerHTML = "Questioner : " + pL1n;
    document.getElementById("pa").innerHTML = "Answerer : " + pL2n;

    //CharAt Code and Funtion SendWord
    var row;
    function SendWord(){
        get_word = document.getElementById("SentWord").value;
        word = get_word.toLowerCase();
        //CharAts

        CharAt1 = word.charAt(1);

        ld2 = Math.floor(word.length/2);
        CharAt2 = word.charAt(ld2);

        lm1 = word.length - 1;
        CharAt3 = word.charAt(lm1);

        removeCharAt1 = word.replace(CharAt1,"_");
        removeCharAt2 = removeCharAt1.replace(CharAt2,"_");
        removeCharAt3 = removeCharAt2.replace(CharAt3,"_");
        //HTML Code
        questionWord = "<h4 id = 'word_display'>Question Word: " + removeCharAt3 + "</h4>";
        inputBox = "<br><br><input id = 'inputcheckbox' type = 'text' placeholder = 'Word'></input>";
        check_Button = "<br><button class = 'btn btn-info' onclick = 'Check()'>Check</button>";
        row = questionWord+inputBox+check_Button;
        document.getElementById("output").innerHTML = row;
    }
var QuestionTurn = "p2";
var AnswerTurn = "p1";
function Check(){
    var getAnswer = document.getElementById("inputcheckbox").value;
    var answer = getAnswer.toLowerCase();
    if(answer == word){
        if(AnswerTurn == "p1"){
            score1 = score1 + 1;
        document.getElementById("p1name").innerHTML = localStorage.getItem("p1n") + " : " + score1;
        }else{
            score2 = score2 + 1;
        document.getElementById("p2name").innerHTML = localStorage.getItem("p2n") + " : " + score2;
        }    
    }else if(answer != word){
        if(AnswerTurn == "p1"){
            score2 = score2 + 1;
        document.getElementById("p2name").innerHTML = localStorage.getItem("p2n") + " : " + score2;
        }else{
            score1 = score1 + 1;
        document.getElementById("p1name").innerHTML = localStorage.getItem("p1n") + " : " + score1;
        }
    }
    if(QuestionTurn == "p1"){
        QuestionTurn = "p2";
        document.getElementById("pq").innerHTML = "Questioner : " + localStorage.getItem("p2n");
    }else{
        QuestionTurn = "p1";
        document.getElementById("pq").innerHTML = "Questioner : " + localStorage.getItem("p1n");
    }
    if(AnswerTurn == "p1"){
        AnswerTurn = "p2";
        console.log(AnswerTurn);
        document.getElementById("pa").innerHTML = "Answerer : " + localStorage.getItem("p2n");
    }else{
        AnswerTurn = "p1";
        document.getElementById("pa").innerHTML = "Answerer : " + localStorage.getItem("p1n");
    }
}