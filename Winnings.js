export default class Winnings {
  totalWinnings = 0;

  addWinnings(winnings) {
    this.totalWinnings = this.totalWinnings + winnings;
  }

  getTotalWinnings() {
    return this.totalWinnings;
  }

  useFromWinnings(amountToBeDeducted) {
    this.totalWinnings = this.totalWinnings - amountToBeDeducted;
  }
}
