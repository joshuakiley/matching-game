document.addEventListener("DOMContentLoaded", () => {

    // Sets the game up when document loads and whenever someone presses the NEW GAME button.
    const setNumbers = () => {
        const nums = [];
        const boxes = document.getElementsByClassName("box");

        document.getElementById("score").innerHTML = 100;

        for (let i = 1; i <= 8; i++) {
            nums.push(i);
            nums.push(i);
        }

        for (let i = 0; i < boxes.length; i++) {
            const tempIndex = Math.floor(Math.random() * Math.floor(nums.length));
            let cover = document.createElement("div");
            cover.classList.add("cover");
            boxes[i].innerHTML = `${nums[tempIndex]}`
            boxes[i].append(cover)
            nums.splice(tempIndex, 1);
        }
    }

    // On documnet load it sets up the visuals for the game board
    const layBoard = () => {
        for (let i = 0; i < 16; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            box.setAttribute("id", `${i}`);
            document.getElementById("game-board").append(box);
        }
        setNumbers();
    }

    // when document is clicked checks if two numbers are showing then checks the answer
    const checkAnswer = (event) => {
        const boxesInPlay = document.getElementsByClassName("in-play");
        const resetCheck = document.getElementsByClassName("red");

        if (boxesInPlay.length == 0 && resetCheck.length == 2) {
            resetFalse[0].classList.remove("red");
            resetFalse[1].classList.remove("red");
        }

        if (boxesInPlay.length < 2 && event.currentTarget.classList.contains("behind") == false) {
            event.currentTarget.children[0].classList.add("behind");
            event.currentTarget.classList.add("in-play");
            console.log(boxesInPlay.length)
        }

        // response if two are selected and are true
        if (boxesInPlay.length == 2 && boxesInPlay[0].textContent == boxesInPlay[1].textContent) {
            boxesInPlay[0].children[0].classList.add("green");
            boxesInPlay[1].children[0].classList.add("green");

            boxesInPlay[0].classList.remove("in-play");
            boxesInPlay[1].classList.remove("in-play");

        }

        // response if two are selected and false
        if (boxesInPlay.length == 2 && boxesInPlay[0].textContent != boxesInPlay[1].textContent) {
            boxesInPlay[0].children[0].classList.add("red");
            boxesInPlay[1].children[0].classList.add("red");

        }
    }

    // resets the game whenever someone presses the New Game button
    document.getElementById("restart").addEventListener("click", setNumbers);

    // sets up the game boad elements when the document is loaded
    layBoard();

    // runs the function that checks answers
    document.querySelectorAll(".box").forEach(element => {
        element.addEventListener("click", checkAnswer);
    });
});