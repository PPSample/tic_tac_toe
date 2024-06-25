let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice =()=>
{
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random () * 3);
    return options[randomidx];
}

const drawgame = () =>
{
    msg.innerText ="it's a draw";
    msg.style.backgroundColor ="#081b31";
};

const showwinner = (userwin , choiceid , compchoice) => {
    if(userwin)
    {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win  ${choiceid} beats ${compchoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lose ${compchoice} beats ${choiceid}`;
        msg.style.backgroundColor ="red";
    }
}

const playgame = (choiceid) =>{
    console.log("user choice=" , choiceid);
    const compchoice =gencompchoice();
    console.log("comp choice=" , compchoice);

    if(choiceid === compchoice)
    {
        drawgame();
    }
    else{
        let userwin = true;
        if(choiceid === "rock")
        {
            userwin = compchoice === "paper" ? false : true ;
        }
        else if(choiceid === "paper")
        {
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin , choiceid , compchoice );
    }
};


choices.forEach((choice)=>
{
    choice.addEventListener("click", () =>{
        const choiceid= choice.getAttribute("id");
    playgame(choiceid);
    });
})