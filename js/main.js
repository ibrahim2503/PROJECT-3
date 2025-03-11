document.querySelectorAll(".copyBtn").forEach((button, index) => {
  button.addEventListener("click", function () {
    var textAreas = document.querySelectorAll(".textToCopy");
    textAreas[index].select();
    document.execCommand("copy");
    alert("Text Copied!");
  });
});
