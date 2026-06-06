function processConfirm(answer) {
  let result;

  if (answer === true) {
    result = "Excellent. We'll play a nice game of chess.";
  } else {
    result = "Maybe later then.";
  }

  return result;
}

let answer = confirm("Would you like to play a game?");
let message = processConfirm(answer);
console.log(message);
