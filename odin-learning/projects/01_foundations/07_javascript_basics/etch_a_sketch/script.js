function createGrid(gridSize){
    const gridElement = document.querySelector(".grid");
    gridElement.replaceChildren();
    for (let rowIdx=0;rowIdx<gridSize;rowIdx++){
        const newGridRow = document.createElement("div")
        newGridRow.className = "grid-row"
        newGridRow.id = `${rowIdx}`

        for (let colIdx=0;colIdx<gridSize;colIdx++){
            const newGridButton = document.createElement("button");
            newGridButton.className = "grid-button";
            newGridButton.id = `${rowIdx}-${colIdx}`
            newGridRow.appendChild(newGridButton);
        }
        gridElement.appendChild(newGridRow);
    }
}

function updateGridWrapper(){
    gridSize = document.querySelector(".grid-size-input").value

    const gridColorModeRadioCheckedElement = document.querySelector("input[name='color']:checked")
    const gridColorMode = gridColorModeRadioCheckedElement.value; 

    if (gridColorMode==="rgb"){
        const rRGB = document.querySelector(".color-mode-rgb-input#red").value;
        const bRGB = document.querySelector(".color-mode-rgb-input#blue").value;
        const gRGB = document.querySelector(".color-mode-rgb-input#green").value;
        rgbValues = [rRGB, gRGB, bRGB]
    }
    else if (gridColorMode==="monochrome"){
        rgbValues = [0, 0, 0]
    }
    else {
        rgbValues = null;
    }

    gridOpacity = document.querySelector(".opacity-mode-checkbox").checked;

    console.log(gridSize, gridColorMode, rgbValues, gridOpacity);
    createGrid(gridSize);
}

function checkRGBColorMode(){
    let rbgRadioValue = document.querySelector(".color-mode-radio#rgb").checked
    const rgbInputDisabled=document.querySelector(".color-mode-rgb-input#red").disabled
    if (rbgRadioValue && rgbInputDisabled){
        document.querySelectorAll(".color-mode-rgb-input").forEach(x=>x.disabled=false)
    } else if(!rbgRadioValue && !rgbInputDisabled){
        document.querySelectorAll(".color-mode-rgb-input").forEach(x=>x.disabled=true)
    }
}

INITIAL_GRID_SIZE=100
INITIAL_RGB_VALUE=255
INITIAL_GRID_OPACITY=false
INITIAL_COLOR_MODE="random"

function setup(){

    
    document.querySelector(".grid-size-input").value=INITIAL_GRID_SIZE;

    document.querySelector(".color-mode-radio#random").checked=INITIAL_COLOR_MODE==="random";
    document.querySelector(".color-mode-radio#monochrome").checked=INITIAL_COLOR_MODE==="monochrome";
    document.querySelector(".color-mode-radio#rgb").checked=INITIAL_COLOR_MODE==="rgb";

    document.querySelector(".color-mode-rgb-input#red").value=INITIAL_RGB_VALUE;
    document.querySelector(".color-mode-rgb-input#blue").value=INITIAL_RGB_VALUE;
    document.querySelector(".color-mode-rgb-input#green").value=INITIAL_RGB_VALUE;

    document.querySelector(".color-mode-rgb-input#red").disabled=INITIAL_COLOR_MODE==="rgb";
    document.querySelector(".color-mode-rgb-input#blue").disabled=INITIAL_COLOR_MODE==="rgb";
    document.querySelector(".color-mode-rgb-input#green").disabled=INITIAL_COLOR_MODE==="rgb";

    document.querySelector(".opacity-mode-checkbox").checked=INITIAL_GRID_OPACITY;


    checkRGBColorMode()
    document.querySelector('#color-mode-form').addEventListener('change', function(e) {
        if (e.target.classList.contains('color-mode-radio')) {
            checkRGBColorMode();
        }
    });

    updateGridWrapper();
    document.querySelector(".controls-button").addEventListener("click", updateGridWrapper);

}
setup()

function addColor(event){
    if (event.buttons === 1 && event.target.classList.contains("grid-button")) {
        let existingOpacity;
        if (gridOpacity){
            const bgColor = window.getComputedStyle(event.target).backgroundColor;
            console.log(bgColor);
            const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/);
            existingOpacity = parseFloat(match[4]);
            console.log(existingOpacity);
        } else {
            existingOpacity = 1
        }
        if (rgbValues===null){
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${existingOpacity+0.1})`;
        } else{
            event.target.style.backgroundColor = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${existingOpacity+0.1})`;
        }
    }
}

document.querySelector(".grid").addEventListener("mouseover", addColor);








// checkRGBColorModeSetup()