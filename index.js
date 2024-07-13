let output = document.querySelector("#output");
function display(num)
{
    output.value += num;
}
function calculate()
{
    try{
        output.value = eval(output.value);
    }
    catch(error)
    {
        alert(error);
    }
}
function clearData()
{
    output.value = "";
}
function deleteOne()
{
    output.value = output.value.slice(0,-1);
}
let buttons = document.querySelectorAll("button");
buttons.forEach( button => button.addEventListener("click",playSound));

function playSound()
{
    let audio = new Audio("clicksound.wav");
    audio.playbackRate = 1.2;
    audio.volume = 0.2;
    audio.play();
}