// read elements
let inpt$$ = document.body.querySelector("input");
let butt$$ = document.body.querySelector(".btn-add");
let containerTasks$$ = document.body.querySelector(".li-container");
let noteComplete$$ = document.body.querySelector(".empty");

// create div history of tasks
let divHistory$$ = document.createElement("div")
divHistory$$.classList.add("container");
let titleHistory$$ = document.createElement("h3");
titleHistory$$.textContent = "History of tasks"
divHistory$$.appendChild(titleHistory$$);
divHistory$$.style.color = "grey";
divHistory$$.style.backgroundColor = "#D8D8D8";
document.body.appendChild(divHistory$$);

/*
function handleInput(event) {
    let inptTextItem = event.target.value;
    let liTask$$ = document.createElement("li");
    liTask$$.textContent = inptTextItem;
    console.log(liTask$$);

    return inptTextItem;
}

function handleButton(event) {
    divtTasks$$.appendChild(liTask$$);
}*/


let arraLogTasks = [];

butt$$.addEventListener("click", function() {
    let inptTextItem = inpt$$.value;
    console.log(inptTextItem);
    if (inptTextItem !== '') {
        
        // Create p of task
        let pTask$$ = document.createElement("p");
        pTask$$.textContent = inptTextItem;
        arraLogTasks.push(inptTextItem);

        // add task to history of tasks
        let pHistory$$ = document.createElement("p")
        pHistory$$.textContent = inptTextItem;
        divHistory$$.appendChild(pHistory$$);

        // Create button delete
        let deleteButt$$ = document.createElement("button");
        deleteButt$$.classList.add("btn-delete");
        deleteButt$$.textContent = "X";

        // add p and button to li
        let liTask$$ = document.createElement("li");
        liTask$$.appendChild(pTask$$);
        liTask$$.appendChild(deleteButt$$);
        containerTasks$$.appendChild(liTask$$);

        // delete note
        if (document.querySelector("li p") !== null) {
            noteComplete$$.textContent = "Keep adding more!";
        } 
        
        deleteButt$$.addEventListener("click", function () {
            liTask$$.remove();
            arraLogTasks.pop();

            if (document.querySelector("li") === null) {
                noteComplete$$.textContent = "All tasks are completed";
            }

        });
        
    }

console.log(arraLogTasks);

});










// if click in button
// add div
