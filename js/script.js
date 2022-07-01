var displayString = "";
var evalString = "";
var rad = true;

function clr() {
  displayString = "0";
  evalString = "0";
  show(displayString);
}

function ans() {
  try {
    displayString = eval(evalString).toExponential();
    show(displayString);
  } catch {
    show("error");
  }
}

function show(displayString) {
  const elem = document.getElementById("Output-box");
  elem.innerHTML = displayString;
}

$(document).ready(function () {
  $(".operators").click(function () {
    const content = $(this).text();
    if (content == "=") {
      ans();
      return;
    }
    if (displayString == "0") {
      displayString = "";
      evalString = "";
    }
    if (content == "CC") clr();
    else if (content == "DC") {
      displayString = displayString.substring(0, displayString.length - 1);
      evalString = evalString.substring(0, evalString.length - 1);
    } else if (content == "rad") {
      rad = true;
      document.getElementById("rad").style.backgroundColor = "red";
      document.getElementById("deg").style.backgroundColor =
        "rgb(201, 201, 201)";
    } else if (content == "deg") {
      rad = false;
      document.getElementById("deg").style.backgroundColor = "red";
      document.getElementById("rad").style.backgroundColor =
        "rgb(201, 201, 201)";
    } else if (content == "pow") {
      displayString += "^";
      evalString += "**";
    } else if (content == "ln") {
      displayString += "ln(";
      evalString += "Math.log(";
    } /*else if (content == "sin") {
      displayString += "sin(";
      evalString += "Math.sin(";
    } else if (content == "cos") {
      displayString += "cos(";
      evalString += "Math.cos(";
    }else if (content == "tan") {
      displayString += "tan(";
      evalString += "Math.tan(";
    } else if (content == "asin") {
      displayString += "asin(";
      evalString += "Math.asin(";
    } else if (content == "acos") {
      displayString += "acos(";
      evalString += "Math.acos(";
    } else if (content == "atan") {
      displayString += "atan(";
      evalString += "Math.atan(";
    }*/ else if (
      content == "sin" ||
      content == "cos" ||
      content == "tan" ||
      content == "asin" ||
      content == "acos" ||
      content == "atan"
    ) {
      displayString += content + "(";
      if (rad == true) evalString += "Math." + content + "(";
      else if (content[0] != "a")
        evalString += "Math." + content + "((Math.PI/180)*";
      else evalString += "(180/Math.PI)*Math." + content + "(";
    } else if (content == "exp") {
      displayString += "exp(";
      evalString += "Math.exp(";
    } else if (content == "sqrt") {
      displayString += "√(";
      evalString += "Math.sqrt(";
    } else if (content == "lg") {
      displayString += "log10(";
      evalString += "Math.log10(";
    } else if (content == "e") {
      displayString += "e";
      evalString += "Math.E";
    } else if (content == "%") {
      displayString += "%";
      evalString += "/100";
    } else if (content == "pi") {
      displayString += "&#x213C;";
      evalString += "Math.PI";
    } else {
      displayString += content;
      evalString += content;
    }
    show(displayString);
  });
});
