import FanFlightService from "./FanFlightService";
import Bonus from "./Bonus";
import Deposit from "./Deposit";
import FanFightWallet from "./FanFlightWallet";
import Winnings from "./Winnings";

class TestFanWallet {

	static start() {
		
		let service = new FanFlightService();
		let bonusPercentage =20;
        let wallet = TestFanWallet.populateFanFightWallet();
        let bal = service.payEntryFee(wallet,400,bonusPercentage);
        console.log("balance => ", bal)

	}
	
	static  populateFanFightWallet()
	{
		let deposit = new Deposit();
		deposit.addDeposit(100);
		
		let bonus = new Bonus();
		bonus.addBonus(60);
		
		let winnings = new Winnings();
		winnings.addWinnings(340);
	
		let wallet = new FanFightWallet(bonus, deposit, winnings);
		return wallet;
			
	}

}

TestFanWallet.start();