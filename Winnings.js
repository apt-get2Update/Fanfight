export default class Winnings {
    constructor(t=0){
        this.totalWinnings = t;
    }

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
