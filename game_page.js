player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player1_question").innerHTML="question turn-"+player1_name;
document.getElementById("player2_answer").innerHTML="answer turn-"+player2_name;
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	actual_word=word;
	console.log("word in lowerCase = " + word);

    
	length=word.length;
	for(var i=0;i<length;i++)
	{
		if(i%2==0)
		{
			word=word.replaceAt(i,"_");
		}
	}

    question_word = "<h4 id='word_display'> Q. "+word+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answerin lowercase-"+answer);
    if (answer==actual_word)
    {
        if(answer_turn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player_1")
    {
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="question turn-"+player2_name;
    }
    else{
        question_turn="player_1";
        document.getElementById("player_question").innerHTML="question turn-"+player1_name;
    }
    if(answer_turn=="player_1")
    {
       answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;
    }
    else{
        answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="answer turn-"+player1_name;
    }
    document.getElementById("output").innerHTML=""
}