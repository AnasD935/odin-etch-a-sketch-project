const container = document.querySelector(".container");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
//container.style.gap = "1px"
container.style.flexWrap = "wrap";

let Arr1 = [];
//let Arr2 = [];

for (let i = 1; i <= 256; i++)
 {
    Arr1[i] = document.createElement("div");
    Arr1[i].style.height = "75px";
    Arr1[i].style.width = "75px";
    Arr1[i].style.borderTop = "1px solid black";
    Arr1[i].style.borderLeft = "1px solid black";
    if (i % 16 == 0)
        Arr1[i].style.borderRight = "1px solid black";
    if (i > 240 && i <= 256)
        Arr1[i].style.borderBottom = "1px solid black";
    container.appendChild(Arr1[i]);
    Arr1[i].addEventListener("mouseover", () =>{
        Arr1[i].style.background = "red";
    });
}


  