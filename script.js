'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

//Images
const Bishar = document.querySelector('.bishar');
const asma = document.querySelector('.asma');
const khalid = document.querySelector('.khalid');
const ali = document.querySelector('.ali');
const allImgs = document.querySelectorAll('.logo');

// Data
const account1 = {
  owner: 'Khalid Hersi',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  gender: 'His',
  phone: 773139034,
  photo: khalid.src,
  movementsDates: [
    '2024-02-20T09:09:17.178Z',
    '2024-03-6T07:42:02.383Z',
    '2023-12-17T09:15:04.904Z',
    '2024-02-16T10:17:24.185Z',
    '2023-11-28T14:11:59.604Z',
    '2024-01-24T17:01:17.194Z',
    '2023-12-28T23:36:17.929Z',
    '2024-02-21T10:51:36.790Z',
  ],
  currency: '€',
  locale: 'en-US',
};

const account2 = {
  owner: 'Bishar Abdinur',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  gender: 'His',
  photo: Bishar.src,
  phone: 703240815,
  movementsDates: [
    '2024-02-20T09:09:17.178Z',
    '2024-02-19T07:42:02.383Z',
    '2023-12-17T09:15:04.904Z',
    '2024-02-16T10:17:24.185Z',
    '2023-11-28T14:11:59.604Z',
    '2024-01-24T17:01:17.194Z',
    '2023-12-28T23:36:17.929Z',
    '2024-02-21T10:51:36.790Z',
  ],
  currency: '$',
  locale: 'en-US',
  photo: 'logo.png',
};

const account3 = {
  owner: 'Asma Abukar',
  movements: [200, -200, 340, 9900, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  phone: 750948288,
  gender: 'Her',
  photo: asma.src,
  movementsDates: [
    '2024-03-20T09:09:17.178Z',
    '2024-02-19T07:42:02.383Z',
    '2023-12-17T09:15:04.904Z',
    '2024-02-16T10:17:24.185Z',
    '2023-11-28T14:11:59.604Z',
    '2024-01-24T17:01:17.194Z',
    '2023-12-28T23:36:17.929Z',
    '2024-02-21T10:51:36.790Z',
  ],
  currency: '$',
  locale: 'en-US',
};

const account4 = {
  owner: 'Abdulahi Jama',
  movements: [430, 1000, 700, 50, 90, -15],
  interestRate: 1,
  pin: 4444,
  gender: 'His',
  photo: ali.src,
  phone: 708815228,
  movementsDates: [
    '2024-02-20T09:09:17.178Z',
    '2024-02-19T07:42:02.383Z',
    '2023-12-17T09:15:04.904Z',
    '2024-02-16T10:17:24.185Z',
    '2023-11-28T14:11:59.604Z',
    '2024-01-24T17:01:17.194Z',
    '2023-12-28T23:36:17.929Z',
    '2024-02-21T10:51:36.790Z',
  ],
  currency: '€',
  locale: 'en-US',
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
const labelCloseText = document.querySelector('.close-acount-text');

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
const phoneNumber = document.querySelector('.phone-number');

// display movements
const dateFormat = function (date) {
  const calcDayspassed = (date1, date2) =>
    Math.trunc(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDayspassed(new Date(), date);
  console.log(daysPassed);

  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth()}`.padStart(2, 0);
  const year = date.getFullYear();
  if (daysPassed === 0) {
    return 'Today';
  }
  if (daysPassed === 1) return 'Yesterday';

  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed === 3) return 'Three Days ago';
  if (daysPassed === 4) return 'Four Days ago';
  if (daysPassed === 5) return 'Five Days ago';
  if (daysPassed === 6) return 'Six Days ago';
  if (daysPassed === 7) return 'One Week  ago';
  if (daysPassed > 7 && daysPassed <= 14) return 'Two Weeks ago';
  if (daysPassed > 14 && daysPassed <= 21) return 'Three Weeks ago';
  if (daysPassed > 21 && daysPassed <= 31) return 'One Month ago';
  if (daysPassed > 31 && daysPassed <= 60) return 'Two Months ago';
  if (daysPassed > 60 && daysPassed <= 90) return 'Three Months ago';
  if (daysPassed === 2) return 'two days ago';
  if (daysPassed === 1) return 'Yesterday';
  else {
    return `${day}/${month}/${year}`;
  }
};

const disPlayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach((value, index) => {
    const type = value > 0 ? 'deposit' : 'withdrawal';

    const dateNow = new Date(acc.movementsDates[index]);
    console.log(dateNow);
    const displayDate = dateFormat(dateNow);

    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
                  <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${new Intl.NumberFormat(
            currentAcount.locale
          ).format(value)}${currentAcount.currency}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayBalance = function (acc) {
  acc.balance = acc.movements
    .map(value => value)
    .reduce((accu, cur) => accu + cur, 0);
  labelBalance.textContent = `${new Intl.NumberFormat(
    currentAcount.locale
  ).format(acc.balance)}${currentAcount.currency}`;
};

const displaySummary = function (acc) {
  const interest = acc.movements
    .filter(value => value > 0)
    .map(value => (value * acc.interestRate) / 100)
    .filter(value => value > 1)
    .reduce((accu, curr) => accu + curr, 0);

  labelSumInterest.textContent = `${new Intl.NumberFormat(
    currentAcount.locale
  ).format(interest)}${currentAcount.currency}`;

  const In = acc.movements
    .filter(value => value > 0)
    .reduce((accu, cur) => accu + cur, 0);
  labelSumIn.textContent = `${new Intl.NumberFormat(
    currentAcount.locale
  ).format(In)}${currentAcount.currency}`;

  const out = acc.movements
    .filter(value => value < 0)
    .reduce((accu, cur) => accu + cur, 0);
  labelSumOut.textContent = `${new Intl.NumberFormat(
    currentAcount.locale
  ).format(out)}${currentAcount.currency}`;
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
  disPlayMovements(acc);
  displaySummary(acc);
  displayBalance(acc);
};

//TimeOut
const timeOutLogIn = function () {
  let time = 600;
  const trick = function () {
    let minute = `${Math.trunc(time / 60)}`.padStart(2, 0);
    let second = `${Math.trunc(time % 60)}`.padStart(2, 0);

    labelTimer.textContent = `${minute}:${second}`;

    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log In to get started`;
    }
    time--;
  };
  trick();
  let timer = setInterval(trick, 1000);
  return timer;
};

//emplementin Log In

let currentAcount, timer;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAcount = accounts.find(
    value => value.username === inputLoginUsername.value
  );

  if (currentAcount?.pin === +inputLoginPin.value) {
    containerApp.style.opacity = 100;
    const options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    let date2 = new Date();
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAcount.locale,
      options
    ).format(date2);

    if (date2.getHours() == 5 || date2.getHours() <= 9) {
      labelWelcome.textContent = ` Good Moring, ${currentAcount.owner.split(
        '  '
      )}`;
    } else if (date2.getHours() == 10 || date2.getHours() <= 13) {
      labelWelcome.textContent = ` Good Day, ${currentAcount.owner.split(
        '  '
      )}`;
    } else if (date2.getHours() == 14 || date2.getHours() <= 18) {
      labelWelcome.textContent = ` Good afternoon, ${currentAcount.owner.split(
        '  '
      )}`;
    } else {
      labelWelcome.textContent = ` Good Night, ${currentAcount.owner.split(
        '  '
      )}`;
    }
    updateUi(currentAcount);

    phoneNumber.textContent = `${currentAcount.gender} Phone Number :0${currentAcount.phone}`;
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    if (timer) clearInterval(timer);
    timer = timeOutLogIn();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiferAcc = accounts.find(
    value => value.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiferAcc &&
    currentAcount.balance >= amount &&
    receiferAcc?.username !== currentAcount.username
  ) {
    currentAcount.movements.push(-amount);
    receiferAcc.movements.push(amount);
    currentAcount.movementsDates.push(new Date().toISOString());
    receiferAcc.movementsDates.push(new Date().toISOString());
    updateUi(currentAcount);
    clearInterval(timer);
    timer = timeOutLogIn();
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});
//loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = +inputLoanAmount.value;
  if (
    loanAmount > 0 &&
    currentAcount.movements.some(value => value >= loanAmount * 0.1)
  ) {
    setTimeout(function () {
      currentAcount.movements.push(loanAmount);
      currentAcount.movementsDates.push(new Date());
      updateUi(currentAcount);
    }, 2000);
    inputLoanAmount.value = '';
    clearInterval(timer);
    timer = timeOutLogIn();
  }
});
//sorting
let sorted = true;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  disPlayMovements(currentAcount.movements, sorted);
  sorted = !sorted;
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('hello btn close');
  inputCloseUsername;
  inputClosePin;
  if (
    currentAcount.username === inputCloseUsername.value &&
    currentAcount.pin === +inputClosePin.value
  ) {
    console.log("hey it's correct");
    const index = accounts.findIndex(
      value => value.username === currentAcount.username
    );
    containerApp.style.opacity = 0;
    accounts.splice(index, 1);
    labelWelcome.textContent = 'Log In to get Started';
    console.log(accounts);
  } else {
    labelCloseText.textContent = 'Wrong UserName and Pin';
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
