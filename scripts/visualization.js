let array = [];

function generateArray(){

    array = [];

    const container = document.getElementById("array-container");

    container.innerHTML = "";

    for(let i = 0; i < 15; i++){

        const value = Math.floor(Math.random() * 300) + 20;

        array.push(value);

        const bar = document.createElement("div");

        bar.classList.add("bar");

        bar.style.height = `${value}px`;

        container.appendChild(bar);
    }
}

function startSorting(){

    const algorithm = document.getElementById("algorithm").value;

    if(algorithm === "bubble"){
        bubbleSort();
    }

    if(algorithm === "selection"){
        selectionSort();
    }

    if(algorithm === "insertion"){
        insertionSort();
    }
}

async function bubbleSort(){

    const bars = document.getElementsByClassName("bar");

    for(let i = 0; i < array.length; i++){

        for(let j = 0; j < array.length - i - 1; j++){

            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";

            await sleep(200);

            if(array[j] > array[j + 1]){

                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                bars[j].style.height = `${array[j]}px`;
                bars[j + 1].style.height = `${array[j + 1]}px`;
            }

            bars[j].style.background = "#60a5fa";
            bars[j + 1].style.background = "#60a5fa";
        }

        bars[array.length - i - 1].style.background = "green";
    }
}

async function selectionSort(){

    const bars = document.getElementsByClassName("bar");

    for(let i = 0; i < array.length; i++){

        let minIndex = i;

        bars[minIndex].style.background = "orange";

        for(let j = i + 1; j < array.length; j++){

            bars[j].style.background = "red";

            await sleep(200);

            if(array[j] < array[minIndex]){

                bars[minIndex].style.background = "#60a5fa";

                minIndex = j;

                bars[minIndex].style.background = "orange";
            }
            else{
                bars[j].style.background = "#60a5fa";
            }
        }

        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

        bars[i].style.height = `${array[i]}px`;
        bars[minIndex].style.height = `${array[minIndex]}px`;

        bars[minIndex].style.background = "#60a5fa";
        bars[i].style.background = "green";
    }
}

async function insertionSort(){

    const bars = document.getElementsByClassName("bar");

    for(let i = 1; i < array.length; i++){

        let key = array[i];
        let j = i - 1;

        bars[i].style.background = "orange";

        await sleep(200);

        while(j >= 0 && array[j] > key){

            array[j + 1] = array[j];

            bars[j + 1].style.height = `${array[j + 1]}px`;

            bars[j].style.background = "red";

            await sleep(200);

            bars[j].style.background = "#60a5fa";

            j--;
        }

        array[j + 1] = key;

        bars[j + 1].style.height = `${key}px`;

        bars[i].style.background = "#60a5fa";
    }

    for(let i = 0; i < bars.length; i++){
        bars[i].style.background = "green";
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

generateArray();