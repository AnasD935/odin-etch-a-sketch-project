const container = document.querySelector(".container");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "1200px"
container.style.width = "1200px"
container.style.flexWrap = "wrap";

let n = 16;
let no = 256;
let size = 75;
let start = 240;
let o = 0;
let Arr1 = [];

function getRandomColor() 
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgba(${r}, ${g}, ${b}, ${o})`; 
}

function generate (n, no, size, start)
{
    for (let i = 1; i <= no; i++)
    {
        Arr1[i] = document.createElement("div");
        Arr1[i].style.height = size + "px";
        Arr1[i].style.width = size + "px";
        Arr1[i].style.borderTop = "1px solid black";
        Arr1[i].style.borderLeft = "1px solid black";
        Arr1[i].style.boxSizing = "border-box";//this one makes border inside box not outside!
        Arr1[i].style.background = "white";
        if (i % n == 0)
            Arr1[i].style.borderRight = "1px solid black";
        if (i > start && i <= no)
            Arr1[i].style.borderBottom = "1px solid black";
        container.appendChild(Arr1[i]);
        Arr1[i].addEventListener("mouseover", () =>{
            Arr1[i].style.background = getRandomColor();
            o += 0.1;
            if (o > 1)
                o = 0;
        });
    }
}

function userGrid ()
{
    n = prompt("Enter #Squares you want: ");
    if (n > 100 || n <= 0 )
    {
        alert("invalid input try another one!");
        return;
    }
    container.innerHTML = " ";
    no = n * n;
    size = (50/n) * 24;//in px
    start = no - n;
    generate(n, no, size, start)
}

up = document.querySelector(".UP");
up.style.height = "100px";
up.style.display = "flex";
up.style.justifyContent = "center";
up.style.alignItems = "center";

btn = document.createElement("button");
btn.textContent = "Chnge board size";
btn.style.width = "180px"
btn.style.height = "50px"
btn.style.fontSize = "19px"
btn.style.borderRadius = "15px";
btn.style.border = "3px solid gray"
btn.style.fontWeight = "700";
up.appendChild(btn);

btn.addEventListener("click", () => {
userGrid();
});

generate(n, no, size, start);//default size = 16