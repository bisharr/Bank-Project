'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Bishar Abdinur',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// display movements

const disPlayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach((value, index) => {
    const type = value > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        
          <div class="movements__value">${value}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayBalance = function (acc) {
  acc.balance = acc.movements
    .map(value => value)
    .reduce((accu, cur) => accu + cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const displaySummary = function (acc) {
  const interest = acc.movements
    .filter(value => value > 0)
    .map(value => (value * acc.interestRate) / 100)
    .filter(value => value > 1)
    .reduce((accu, curr) => accu + curr, 0);

  labelSumInterest.textContent = `${interest}€`;

  const In = acc.movements
    .filter(value => value > 0)
    .reduce((accu, cur) => accu + cur, 0);
  labelSumIn.textContent = `${In}€`;

  const out = acc.movements
    .filter(value => value < 0)
    .reduce((accu, cur) => accu + cur, 0);
  labelSumOut.textContent = `${out}€`;
};

const userName = function (movements) {
  movements.forEach(value => {
    value.username = value.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('');
  });
};
userName(accounts);
console.log(accounts);

const updateUi = function (acc) {
  disPlayMovements(acc.movements);
  displaySummary(acc);
  displayBalance(acc);
};

//emplementin Log In

let currentAcount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAcount = accounts.find(
    value => value.username === inputLoginUsername.value
  );

  if (currentAcount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;

    labelWelcome.textContent = `Welcome Back, ${currentAcount.owner.split(
      '  '
    )}`;
    updateUi(currentAcount);
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
  }
});
console.log(accounts);

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiferAcc = accounts.find(
    value => value.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiferAcc &&
    currentAcount.balance >= amount &&
    receiferAcc?.username !== currentAcount.username
  ) {
    console.log('hello transfer');
    currentAcount.movements.push(-amount);
    receiferAcc.movements.push(amount);
    updateUi(currentAcount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});
//loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('hello loan');
  const loanAmount = Number(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAcount.movements.some(value => value >= loanAmount * 0.1)
  ) {
    currentAcount.movements.push(loanAmount);
    updateUi(currentAcount);
    inputLoanAmount.value = '';
  }
});
//sorting
let sorted = true;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  disPlayMovements(currentAcount.movements, sorted);
  sorted = !sorted;
});
