//your code here
  let evaluatedText = document.getElementById("evaluatedText");
    let letterCount = document.getElementById("letterCount");

    evaluatedText.addEventListener("input", function () {
        let len = evaluatedText.value.length;
        letterCount.innerHTML = len;

    })