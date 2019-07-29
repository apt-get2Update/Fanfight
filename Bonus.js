export default class Bonus {
	
	totalBonus = 0;
	
	addBonus(bonus){
		//have some check whether the giving bonus amount is > 0
		this.totalBonus = this.totalBonus + bonus;
	}
	
	getTotalBonus()
	{
		return this.totalBonus;
	}
	
	useFromBonus(amountToBeDeducted){
		this.totalBonus = this.totalBonus - amountToBeDeducted;
	}

}

