
export default class Deposit {
  totalDeposit = 0;

  addDeposit(depositAmount) {
    //have some check whether the giving deposit amount is > 0
    totalDeposit = totalDeposit + depositAmount;
  }
  getTotalDepositAmount() {
    return totalDeposit;
  }
  useFromDeposit(amountToBeDeducted) {
    totalDeposit = totalDeposit - amountToBeDeducted;
  }
}
