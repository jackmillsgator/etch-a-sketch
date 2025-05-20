
const containerDiv = document.querySelector("#container-div");

const innerArray = [];
for (let x = 0; x < 16; x++)
{

    let tempSquare = document.querySelector(`#inner${x}`);
    innerArray.push(tempSquare);

}

for (let i = 0; i < 16; i++)
{

    for (let j = 0; j < 16; j++)
    {

        var tempDiv = document.createElement("div");
        tempDiv.id = `square${(i * 10) + j}`;
        tempDiv.style["border-style"] = "solid";
        tempDiv.style["border-color"] = "pink";
        tempDiv.style["width"] = "20px";
        tempDiv.style["height"] = "20px";
        tempDiv.className = `hoverYO`;

        innerArray[i].appendChild(tempDiv);

    }

}

let allSquareNodes = document.querySelectorAll(".hoverYO");

console.log(allSquareNodes);

allSquareNodes.forEach(function(square)
    {
        square.addEventListener("mouseover", function()
            {
                square.style["background-color"] = "blue";
            });
    });

allSquareNodes.forEach(function(square)
    {
        square.addEventListener("mouseout", function()
            {
                square.style["background-color"] = "white";
            });
    });


