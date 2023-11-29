let score;
let choices=['BAT','BALL','STUMP'];

function computerChoice(){
    return choices[Math.floor((Math.random()*3))];
}

updateState();

function updateState(){
    let cachedScore=localStorage.getItem('score');//this will give you string value you need to parse it to json object
    score=cachedScore ? JSON.parse(cachedScore) : {
        win:0,
        loss:0,
        tie:0,
    };
    //if there's nothing in local storage then you are playing this game for the first time hence set all score to 0
    //if there's nothing in local storage then cachedScore you will get null hence before parsing  it you should first 
    //check it's value
    
    //as per the encapsulation , all properties and methods related to one object should enclosed with that object only so, calculateScore method also must be with score object only don't rendomly define it anywhere
    score.calculateScore=function(winner){
        if(winner==='USER')
            score.win++;
        else if(winner==='COMPUTER')
            score.loss++;
        else if(winner==='TIE')
            score.tie++;

        //as soon as score gets updated we should also update chached value
        localStorage.setItem('score',JSON.stringify(score));
    }

    displayScore();
}
//we are adding below method to score object


function calculateWinner(user_choice,computer_choice){
    //whether user choose bat or ball or stump in all 3 cases he can win loose or tie so total 3*3=9 cases are possible
    let winner;
    if(user_choice==='BAT'){
        if(computer_choice=='BAT')
            winner= 'TIE'; 
        else if(computer_choice=='BALL')
            winner= 'USER'; 
        else if(computer_choice=='STUMP')
            winner= 'COMPUTER'; 

    }
    else if(user_choice==='BALL'){
        if(computer_choice=='BAT')
            winner= 'COMPUTER'; 
        else if(computer_choice=='BALL')
            winner= 'TIE'; 
        else if(computer_choice=='STUMP')
            winner= 'USER';

    }
    else if(user_choice==='STUMP'){ //to increase code readability I've written this else if condition otherwise just else is enough here
        if(computer_choice=='BAT')
            winner= 'USER'; 
        else if(computer_choice=='BALL')
            winner= 'COMPUTER'; 
        else if(computer_choice=='STUMP')
            winner= 'TIE';

    }

    return winner;
}


function showResult(user_choice){
    let computer_choice=computerChoice();
    let winner=calculateWinner(user_choice,computer_choice);
    score.calculateScore(winner);
    displayScore(user_choice,computer_choice,winner);
}

function displayScore(user_choice,computer_choice,winner){ //on reset all these will be undefined hence need to set empty string to other headers
    document.querySelector('#user-choice').textContent= user_choice?`User choice:${user_choice}`:'';
    document.querySelector('#computer-choice').textContent= computer_choice?`Computer choice:${computer_choice}`:'';
    document.querySelector('#winner').textContent= winner?`Winner:${winner}`:'';
    document.querySelector('#score').textContent= `score:Win = ${score.win}, Loss = ${score.loss}, Tie = ${score.tie}`;
}
