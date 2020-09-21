document.addEventListener("DOMContentLoaded", () => {

    // =============================================
    //                  GAME SETUP
    // =============================================

    // Sets the game up when document loads and whenever someone presses the NEW GAME button.
    function setNumbers() {
        const nums = [];
        const boxes = $(".box");

        $("#score").text(100);

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
    function layBoard() {
        for (let i = 0; i < 16; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            box.setAttribute("id", `${i}`);
            document.getElementById("game-board").append(box);
        }
        setNumbers();
    }

    // sets up the game boad elements when the document is loaded
    layBoard();

    function reset() {
        $("#score").text(100);
    }

    // 
    // GAMEPLAY 
    // 

    function wrong() {
        $(".in-play").children().removeClass("red");
        $(".in-play").children().removeClass("behind");
        $(".in-play").removeClass("in-play");
    }

    function right() {
        // change background to gree to indicate to the player that it's correct
        $(".in-play").children().addClass("green");

        // remove the shown cards from being recognized as in play so the game can continue
        $(".in-play").removeClass("in-play");

        // reward 10 points to the player
        $("#score").text(+$("#score").text() + 10)
    }

    function wrong() {
        // show red background to indicate to the playr they are incorrect
        $(".in-play").children().addClass("red");


        setTimeout(function () {
            // hide the cards again
            $(".in-play").children().removeClass("red");
            $(".in-play").children().removeClass("behind");

            // remove the cards from being in play
            $(".in-play").removeClass("in-play");
        }, 1000);

        // subtract one point from the score
        $("#score").text($("#score").text() - 1);
    }

    // when document is clicked checks if two numbers are showing then checks the answer
    function gameAction(event) {

        if ($(".in-play").length < 2 && event.currentTarget.classList.contains("behind") == false) {
            event.currentTarget.children[0].classList.add("behind");
            event.currentTarget.classList.add("in-play");
        }

        if ($(".in-play").length == 2) {
            if ($(".in-play")[0].innerText == $(".in-play")[1].innerText) {
                right()
            } else {
                wrong();
            }
        }
    }

    // resets the game whenever someone presses the New Game button
    $("#restart").click(setNumbers);

    // runs the function that checks answers
    $(".box").click(gameAction);
});





// response if two are selected and are true
// if (boxesInPlay.length == 2 && boxesInPlay[0].textContent == boxesInPlay[1].textContent) {
//     boxesInPlay[0].children[0].classList.add("green");
//     boxesInPlay[1].children[0].classList.add("green");

//     boxesInPlay[0].classList.remove("in-play");
//     boxesInPlay[1].classList.remove("in-play");

// } else if (boxesInPlay.length == 2 && boxesInPlay[0].textContent != boxesInPlay[1].textContent) {
//     boxesInPlay[0].children[0].classList.add("red");
//     boxesInPlay[1].children[0].classList.add("red");

// }

// if (boxesInPlay.length == 0 && falseBoxes.length == 2) {
//     falseBoxes[0].classList.remove("red");
//     falseBoxes[1].classList.remove("red");
// }