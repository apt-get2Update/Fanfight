export default class FanFightService {
  static processPayment(wallet, amount) {
    let bonus = wallet.getBonus();
    let deposit = wallet.getDeposit();
    let winnings = wallet.getWinnings();

    let dAmount = deposit.getTotalDepositAmount();
    if (dAmount > amount) {
      deposit.useFromDeposit(amount);
    } else {
      deposit.useFromDeposit(dAmount);
      let bal = amount - dAmount;
      //get winnings 85%
      let win = Math.round((bal * 85) / 100);
      if (winnings.getTotalWinnings() > win) {
        winnings.useFromWinnings(win);
        if(bonus.getTotalBonus() < (bal-win)){
            bonus.useFromBonus(bonus.getTotalBonus());
            winnings.useFromWinnings((bal - win) - bonus.getTotalBonus());
        }else{
            bonus.useFromBonus(bal-win);
        }
      } else {
        winnings.useFromWinnings(winnings.getTotalWinnings());
        bonus.useFromBonus(bal - winnings.getTotalWinnings());
      }
    }
    return wallet
  }
  calculateBonus(bonus, bonusPercentage) {
    return (bonusPercentage * bonus.getTotalBonus()) / 100;
  }
  payEntryFee(wallet, amount, discount) {
    let totatlAmount = wallet.getFanFightWalletBalance();
    if (amount > totatlAmount) {
      throw new Error("You dont have sufficient Balance");
    } else {
      let pay = amount - (amount * discount) / 100;
      return FanFightService.processPayment(wallet, pay);
    }
  }
}
