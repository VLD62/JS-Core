function solve() {
    let nextBtn = document.getElementsByTagName("button")[0];
    let cancelBtn = document.getElementsByTagName("button")[1];
    cancelBtn.addEventListener("click", function () {
        document.getElementsByTagName("section")[0].style.display = "none";
    });
    let firstStepDiv = document.getElementById("firstStep");
    let secondStepDiv = document.getElementById("secondStep");
    let thirdStepDiv = document.getElementById("thirdStep");
    let licenseBtns = document.getElementsByName("license");
    for (i = 0; i < licenseBtns.length; i++) {
        let currentBtn = licenseBtns[i];
        licenseBtns[i].addEventListener("click", function () {
            currentBtn.setAttribute("checked", "");
            for (index = 0; index < licenseBtns.length; index++) {
                if (licenseBtns[index] != currentBtn) {
                    licenseBtns[index].removeAttribute("checked");
                }
            }

        });
    }
    nextBtn.addEventListener("click", function () {
        if (firstStepDiv.display != "block" && secondStepDiv.display != "block" && thirdStepDiv.display != "block") {
            document.getElementById("content").style.backgroundImage = "url()";
            firstStepDiv.style.display = "block";
        }
        if (firstStepDiv.display != "none" && secondStepDiv.display != "block" && thirdStepDiv.display != "block") {
            for (i = 0; i < licenseBtns.length; i++) {
                if (licenseBtns[i].hasAttribute("checked") && licenseBtns[i].value == "agree") {
                    firstStepDiv.style.display = "none";
                    secondStepDiv.style.display = "block";
                    nextBtn.style.display = "none";
                }
            }
        }
        if (firstStepDiv.display != "block" && secondStepDiv.display != "none" && thirdStepDiv.display != "block") {
            setTimeout(function () {
                nextBtn.style.display = "inline";
                nextBtn.addEventListener("click", function () {
                    secondStepDiv.style.display = "none";
                    thirdStepDiv.style.display = "block";
                })
            }, 3000);
        }
    });
}