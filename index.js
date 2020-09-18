document.addEventListener("DOMContentLoaded", () => {
    console.log("ready");

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

        console.log(nums)

    }

    const layBoard = () => {
        for (let i = 0; i < 16; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            box.setAttribute("id", `${i}`);
            document.getElementById("game-board").append(box);
        }
        setNumbers();
    }

    document.getElementById("restart").addEventListener("click", setNumbers);

    layBoard();
});