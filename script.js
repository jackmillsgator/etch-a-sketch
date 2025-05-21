
function createGrid(squaresPerSide)
{

    const innerArray = [];
    for (let x = 0; x < squaresPerSide; x++)
    {

        let tempSquare = document.createElement("div");
        tempSquare.id = `#inner${x}`;
        tempSquare.className = `innerContainer`;

        containerDiv.appendChild(tempSquare);
        innerArray.push(tempSquare);

    }

    for (let i = 0; i < squaresPerSide; i++)
    {

        for (let j = 0; j < squaresPerSide; j++)
        {

            var tempDiv = document.createElement("div");
            tempDiv.id = `square${(i * 10) + j}`;
            tempDiv.style["border-style"] = "solid";
            tempDiv.style["border-color"] = "salmon";
            tempDiv.style["flex-grow"] = "1";
            tempDiv.className = `hoverYO`;

            innerArray[i].appendChild(tempDiv);

        }

    }

    let allSquareNodes = document.querySelectorAll(".hoverYO");

    allSquareNodes.forEach(function(square)
        {
            square.addEventListener("mouseover", function()
                {
                    square.style["background-color"] = "grey";
                });
        });

}

function deleteGrid()
{

    let allSquareNodesTemp = document.querySelectorAll(".hoverYO");
    allSquareNodesTemp.forEach( (e) => e.remove());

    let allInnerContainersTemp = document.querySelectorAll(".innerContainer");
    allInnerContainersTemp.forEach( (e) => e.remove());

}

function buttonClick()
{

    while ( (Number(promptAnswer) >= 100) || (Number(promptAnswer) <= 0) )
    {
        promptAnswer = prompt("Number of squares per side for new grid:", "0");
    }

    deleteGrid();
    createGrid(promptAnswer);

    promptAnswer = "-1";

}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

const containerDiv = document.querySelector("#container-div");
let topButton = document.querySelector("#top-button");
let promptAnswer = "-1";

//////      Creates initial grid displayed      /////
createGrid(16);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

topButton.addEventListener("click", buttonClick);
