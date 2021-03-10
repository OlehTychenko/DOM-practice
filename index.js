// 1. створити список з допомогою роботи з домом, пронумерувати список та вивести всі його значення.Населення відобразити в млн "40 млн".Київ та Україна підсвітити синьо - жовтим кольором.

var CountryList = [
    {
        country: "Україна",
        capital: "Київ",
        count: 40000000

    },
    {
        country: "Грузія",
        capital: "Тбілісі",
        count: 10000000
    },
    {
        country: "Великобританія",
        capital: "Лондон",
        count: 100000000

    },
    {
        country: "США",
        capital: "Вашингтон",
        count: 300000000
    }];

for (let i = 0; i < CountryList.length; i++) {
    CountryList[i].count /= 1000000;
    let countryWrap = document.createElement('div');
    let countryTitle = document.createElement('div');
    let countryCapital = document.createElement('div');
    let countryCount = document.createElement('div');
    for (let key in CountryList[i]) {
        key === "country" ? countryTitle.textContent = CountryList[i][key] : '';
        key === "capital" ? countryCapital.textContent = CountryList[i][key] : '';
        key === "count" ? countryCount.textContent = CountryList[i][key] : '';
        countryWrap.append(countryTitle, countryCapital, countryCount);
    }
    document.body.append(countryWrap);
    if (countryWrap.firstChild.textContent === "Україна") {
        countryWrap.firstChild.style.color = "blue";
        countryWrap.children[1].style.color = "yellow";
    };
};

// 2. Створити список в якому можна буде довільно змінювати колір для айтемів(палітра мінімум з 5 кольорів).

let list = document.createElement('div');
list.style.display = 'inline-block'

document.body.append(list);


for (let i = 0; i < 10; i++) {
    let el = document.createElement('p');
    el.textContent = (Math.random());
    list.append(el);
};

let changeList = document.createElement('div');

document.body.append(changeList);

const COLORS = ['red', 'blue', 'green', 'yellow', 'pink'] 

for (let i = 0; i < 5; i++) {
    let but = document.createElement('button');
    but.style.width = '100px';
    but.style.height = '50px';
    but.style.backgroundColor = COLORS[i];
    but.textContent = i;
    but.onclick = () => list.style.background = COLORS[i];
    changeList.append(but); 
};