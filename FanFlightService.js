import Bonus from "./Bonus";
import Deposit from "./Deposit";
import FanFightWallet from "./FanFlightWallet";
import Winnings from "./Winnings";

export default class FanFightService {
//   fanFightWallet;
  constructor(bonus,deposit,win){
      this.fanFightWallet = new FanFightWallet(
        new Bonus(bonus),
        new Deposit(deposit),
        new Winnings(win)
      );
  }
  calculateBonus(bonus, bonusPercentage) {
    bonusAmountToBeDeducted = 0;
        /*
		  Calculate the bonus amount based on the given percentage and deduct from Bonus
		  and return that bonus amount.
		 */

    return bonusAmountToBeDeducted;
  }
  
}
