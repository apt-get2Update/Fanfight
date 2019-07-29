
export default class Deposit {
  totalDeposit = 0;

  addDeposit(depositAmount) {
    //have some check whether the giving deposit amount is > 0
    this.totalDeposit = this.totalDeposit + depositAmount;
  }
  getTotalDepositAmount() {
    return this.totalDeposit;
  }
  useFromDeposit(amountToBeDeducted) {
    this.totalDeposit = this.totalDeposit - amountToBeDeducted;
  }
}
