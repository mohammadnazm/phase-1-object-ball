// Function to get the number of points scored by a player
function numPointsScored(playerName) {
  const game = gameObject();
  for (const team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].points;
    }
  }
  return null; // Return null if player not found
}

// Function to get the shoe size of a player
function shoeSize(playerName) {
  const game = gameObject();
  for (const team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].shoe;
    }
  }
  return null; // Return null if player not found
}

// Function to get the colors of a team
function teamColors(teamName) {
  const game = gameObject();
  for (const team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
  return null; // Return null if team not found
}

// Function to get an array of team names
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// Function to get an array of player numbers for a given team
function playerNumbers(teamName) {
  const game = gameObject();
  for (const team in game) {
    if (game[team].teamName === teamName) {
      const playerNumbersArray = [];
      for (const player in game[team].players) {
        playerNumbersArray.push(game[team].players[player].number);
      }
      return playerNumbersArray;
    }
  }
  return null; // Return null if team not found
}

// Function to get the stats of a player
function playerStats(playerName) {
  const game = gameObject();
  for (const team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName];
    }
  }
  return null; // Return null if player not found
}

// Function to get the number of rebounds for the player with the largest shoe size
function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;

  for (const team in game) {
    for (const player in game[team].players) {
      const currentShoeSize = game[team].players[player].shoe;
      if (currentShoeSize > largestShoeSize) {
        largestShoeSize = currentShoeSize;
        playerWithLargestShoe = player;
      }
    }
  }

  if (playerWithLargestShoe) {
    return game.home.players[playerWithLargestShoe].rebounds;
  }

  return null; // Return null if no player found
}

// Example usage:
console.log(numPointsScored("Alan Anderson"));
console.log(shoeSize("Alan Anderson"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerStats("Jeff Adrien"));
console.log(bigShoeRebounds());
