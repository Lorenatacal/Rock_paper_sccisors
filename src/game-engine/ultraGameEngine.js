export const rules = {
  scissorsrock: 1,
  scissorspaper: 1,
  paperrock: 1,
  rockscissors: -1,
  paperscissors: -1,
  rockpaper: -1,
  rockrock: 0,
  scissorsscissors: 0,
  paperpaper: 0
};

export default function gameWinner(
  userValue,
  computerValue,
  userScore = 0,
  computerScore = 0
) {
  let option = userValue + computerValue;

  let winner = {
    1: {
      winner: "User won",
      userScore: userScore + 1,
      computerScore
    },
    "-1": {
      winner: "Computer won",
      userScore: userScore,
      computerScore: computerScore + 1
    },
    0: {
      winner: "Draw",
      userScore,
      computerScore
    }
  };

  let val = rules[option] === undefined ? 0 : rules[option];

  return winner[val];
}
