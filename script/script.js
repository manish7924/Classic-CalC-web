const input = document.getElementById("inputbox");
const buttons = document.querySelectorAll("button");

let currentExpression = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;

    if (buttonText === "=") {
      if (currentExpression.trim() === "") return;

      try {
        let evalString = currentExpression.replace(/%/g, "*0.01");

        let result = eval(evalString);

        if (result % 1 !== 0) {
          result = parseFloat(result.toFixed(6));
        }

        currentExpression = result.toString();
        input.value = currentExpression;
      } catch {
        input.value = "Error";
        currentExpression = "";
      }
    } else if (buttonText === "AC") {
      currentExpression = "";
      input.value = "";
    } else if (buttonText === "DEL") {
      currentExpression = currentExpression.slice(0, -1);
      input.value = currentExpression;
    } else {
      currentExpression += buttonText;
      input.value = currentExpression;
    }
  });
});
