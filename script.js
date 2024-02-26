//homework 06

let userYearOfBorn = +prompt('Введіть ваш рік нарождення: ');
let userCity = prompt('Введіть вашє місто ( з великої літери! ): ');
let userSport = prompt('Введіть ваш улюбленний спорт: ');
let userAge;
let userCityAnswer;
let userSportAnswer;
let year = new Date().getFullYear();

let template_1 = `Ти живеш у`
let template_2 = `Круто! Хочеш стати`
let template_3 = `Шкода, що Ви не захотіли ввести`;
let answer;

if(userYearOfBorn) {
  userAge = `Ваш вік ${year - userYearOfBorn}`;
} else {
  userAge = `${template_3} дату народження`;
}

if(userCity) {
  if(userCity === 'Лондон' || userCity === 'Київ' || userCity === 'Вашингтон') {
    userCityAnswer = `${template_1} столиці ${userCity}`;
  } else {
    userCityAnswer = `${template_1} місті ${userCity}`;
  }
} else { 
  userCityAnswer = `${template_3} місто`;
}

if(userSport === 'футбол') {
  userSportAnswer = `${template_2} Дієго Марадона?`;
} else if(userSport === 'бокс') {
  userSportAnswer = `${template_2} Віталієм Кличко?`;
} else if(userSport === 'баскетбол') {
  userSportAnswer = `${template_2} Майклом Джорданом?`;
} else {
  userSportAnswer = `${template_3} вид спорту`;
}

answer = `${userAge} \n${userCityAnswer} \n${userSportAnswer}`;

alert(answer);


