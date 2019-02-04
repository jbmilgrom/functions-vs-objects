class BankAccount {
    private balance;

    constructor({ funds }) {
        this.balance = funds;
    }

    withdraw(amount) {
        this.balance = this.balance - amount;
    }

    checkBalance() {
        return this.balance;
    }
}

const bankAccount = new BankAccount({funds: 100});
bankAccount.withdraw(20);
bankAccount.checkBalance(); // 80
