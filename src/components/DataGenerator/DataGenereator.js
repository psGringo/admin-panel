import {ReactComponent as DotIcon} from "../../static/dot.svg";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

export const GenerateData = (countRecords) => {
    const data = [];
    const states = useSelector(state => state.orderStates);

    for (let i = 0; i < countRecords; i++){
        const randomDateValue = randomDate(new Date(2012, 0, 1), new Date());
        data.push(
            {
                id: i,
                date: randomDateValue,
                state: getRandomFromArray(states),
                statusIcon: <DotIcon width = "16px" height = "16px" />,
                positions: Math.floor(Math.random() * 10),
                summa: Math.floor(Math.random() * 10000),
                person: getRandomFromArray(randomRussianNames)
            }
        );
    }
    return data;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomFromArray(a){
    return a[Math.floor(Math.random() * a.length)]
}


const randomRussianNames = [
    'Абрамов Павел Артёмович',
    'Авдеева Елена Александровна',
    'Александрова Ксения Алексеевна',
    'Антонов Андрей Артурович',
    'Антонова Мария Алексеевна',
    'Баранова Ульяна Алексеевна',
    'Белоусова Алина Марковна',
    'Бирюков Даниил Артурович',
    'Богданова Арина Романовна',
    'Бондарева Алёна Александровна',
    'Бочарова Вера Андреевна',
    'Булатов Даниил Евгеньевич',
    'Бурова Дарья Артёмовна',
    'Васильев Фёдор Иванович',
    'Виноградов Ярослав Маркович',
    'Воробьева Елизавета Кирилловна',
    'Герасимова Виктория Константиновна',
    'Гладков Вадим Владимирович',
    'Горюнова Ева Алексеевна',
    'Григорьев Андрей Тимофеевич',
    'Громов Николай Михайлович',
    'Губанова Валентина Матвеевна',
    'Данилов Иван Антонович',
    'Егоров Николай Миронович',
    'Егорова Полина Никитична',
    'Жукова Вероника Тимофеевна',
    'Захаров Владимир Миронович',
    'Зеленина Александра Дмитриевна',
    'Зиновьева Полина Макаровна',
    'Злобин Глеб Матвеевич',
    'Иванов Леон Ярославович',
    'Иванова Ника Артёмовна',
    'Ильина София Владимировна',
    'Калинин Марк Миронович',
    'Капустин Евгений Фёдорович',
    'Кириллов Андрей Никитич',
    'Князева София Павловна',
    'Колесников Артём Максимович',
    'Комаров Игорь Арсеньевич',
    'Кондрашов Артём Георгиевич',
    'Копылова Яна Ивановна',
    'Корнеев Александр Борисович',
    'Косарев Всеволод Максимович',
    'Крылова Валерия Степановна',
    'Кудрявцев Георгий Владимирович',
    'Кузнецов Дмитрий Миронович',
    'Кузнецов Матвей Глебович',
    'Кукушкина Дарья Михайловна',
    'Лебедева Анастасия Андреевна',
    'Макарова Милена Степановна',
    'Макеев Григорий Фёдорович',
    'Марков Лев Филиппович',
    'Мартынов Тимофей Даниилович',
    'Морозов Лев Артёмович',
    'Морозова Василиса Владимировна',
    'Москвина Анна Кирилловна',
    'Мухин Николай Вячеславович',
    'Наумов Никита Ильич',
    'Никитин Степан Маркович',
    'Николаев Дмитрий Егорович',
    'Николаева Елена Матвеевна',
    'Никулина Варвара Романовна',
    'Новиков Руслан Владимирович',
    'Новиков Роман Львович',
    'Панова Ева Платоновна',
    'Парфенова Полина Фёдоровна',
    'Петухов Максим Артёмович',
    'Пименова Елизавета Степановна',
    'Плотникова Валерия Максимовна',
    'Попова Таисия Константиновна',
    'Попова Алина Денисовна',
    'Потапова Мария Александровна',
    'Раков Роман Романович',
    'Родионова Ангелина Георгиевна',
    'Романова Надежда Михайловна',
    'Семенова Виктория Демидовна',
    'Семенова Мария Семёновна',
    'Сергеев Сергей Алексеевич',
    'Сидорова Дарья Кирилловна',
    'Симонова Анастасия Ильинична',
    'Смирнов Николай Максимович',
    'Смирнов Евгений Сергеевич',
    'Смирнова Александра Данииловна',
    'Смирнова Анна Тимофеевна',
    'Сотников Максим Григорьевич',
    'Спиридонова Анна Макаровна',
    'Сурков Тимофей Владимирович',
    'Суханова Варвара Владимировна',
    'Тарасов Фёдор Яковлевич',
    'Трифонов Никита Львович',
    'Федорова Алёна Матвеевна',
    'Федорова Алиса Глебовна',
    'Фетисов Антон Кириллович',
    'Филиппов Георгий Максимович',
    'Фролов Степан Павлович',
    'Фролова Екатерина Михайловна',
    'Шаповалов Глеб Никитич',
    'Шевцов Мирон Артёмович',
    'Щербакова Алёна Леонидовна',
    'Яковлев Роман Дмитриевич',
]
