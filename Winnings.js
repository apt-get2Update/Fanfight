export default class Winnings {
  totalWinnings = 0;

  addWinnings(winnings) {
    totalWinnings = totalWinnings + winnings;
  }

  getTotalWinnings() {
    return totalWinnings;
  }

  useFromWinnings(amountToBeDeducted) {
    totalWinnings = totalWinnings - amountToBeDeducted;
  }
}
