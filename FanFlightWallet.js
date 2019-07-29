export default class FanFightWallet {
  deposit;
  bonus;
  winnings;

  constructor(bonus, deposit, winnings) {
    this.deposit = deposit;
    this.bonus = bonus;
    this.winnings = winnings;
  }

  getDeposit() {
    return deposit;
  }
  setDeposit(deposit) {
    this.deposit = deposit;
  }
  getBonus() {
    return bonus;
  }
  setBonus(bonus) {
    this.bonus = bonus;
  }
  getWinnings() {
    return winnings;
  }
  setWinnings(winnings) {
    this.winnings = winnings;
  }

  getFanFightWalletBalance() {
    return (
      getBonus().getTotalBonus() +
      getDeposit().getTotalDepositAmount() +
      getWinnings().getTotalWinnings()
    );
  }
}
