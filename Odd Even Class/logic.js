
let numberOfTimesClicked=localStorage.getItem("count") || 0;
greetings("Yash");
updateButton();

function updateButton(){
    let button=document.querySelector('#btn');
    button.innerText = numberOfTimesClicked;
    if(numberOfTimesClicked%2==0){
        //now it's even so earlier it might be odd, so remove odd class and add even class
        button.classList.remove('js-odd');
        button.classList.add('js-even');
    }
    else{
        //if now it's odd then earlier it might be even , so remove even and add odd
        button.classList.remove('js-even');
        button.classList.add('js-odd');
    }
    localStorage.setItem("count",numberOfTimesClicked);
}

function incrementClicks(){
    numberOfTimesClicked++;
    updateButton();
}

function greetings(personName){
    let heading=document.querySelector("#greetings");
    let hour=(new Date()).getHours();
    // hour=17; to test the greetings you can directly change hours
    let body=document.querySelector('body')

    if(hour>=5 && hour<=12){
        heading.innerText=`Good Morning ${personName}!`;
        document.body.style.backgroundColor = "bisque";
    }
    else if(hour>12 && hour<=18){
        heading.innerText=`Good Evening ${personName}!`;
        document.body.style.backgroundColor = "red";
    }
    else{
        heading.innerText=`Good Night ${personName}!`;
        heading.style.color="blue";
        document.body.style.backgroundColor = "black";
    }

}
