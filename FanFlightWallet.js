export default class FanFightWallet {

  constructor(bonus, deposit, winnings) {
    this.deposit = deposit;
    this.bonus = bonus;
    this.winnings = winnings;
  }

  getDeposit() {
    return this.deposit;
  }
  setDeposit(deposit) {
    this.deposit = deposit;
  }
  getBonus() {
    return this.bonus;
  }
  setBonus(bonus) {
    this.bonus = bonus;
  }
  getWinnings() {
    return this.winnings;
  }
  setWinnings(winnings) {
    this.winnings = winnings;
  }

  getFanFightWalletBalance() {
    return (
      this.getBonus().getTotalBonus() +
      this.getDeposit().getTotalDepositAmount() +
      this.getWinnings().getTotalWinnings()
    );
  }
}
