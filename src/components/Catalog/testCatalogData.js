// Data like this should load from server
import img_1_1_1_1 from "./testData/1/1/1/1.jpg"
import img_1_1_1_2 from "./testData/1/1/1/2.jpg"
import img_1_1_1_3 from "./testData/1/1/1/3.jpg"

import img_1_1_2_1 from "./testData/1/1/2/1.jpg"
import img_1_1_2_2 from "./testData/1/1/2/2.jpg"
import img_1_1_2_3 from "./testData/1/1/2/3.jpg"

import img_1 from "./testData/testItem/1.jpg"
import img_2 from "./testData/testItem/2.jpg"
import img_3 from "./testData/testItem/3.jpg"
import img_4 from "./testData/testItem/4.jpg"
import img_5 from "./testData/testItem/5.jpg"
import img_6 from "./testData/testItem/6.jpg"


const categories = [
    {
        title: 'camping', // 1
        subcategories: [
            'tents and awnings', // 1.1
            'sleeping bags', //1.2
            'mattresses', //1.3
            'camping furniture', //1.4
        ]
    },
    {
        title: 'hiking', // 2
        subcategories: [
            'backpacks', //2.1
            'travel mats', //2.2
            'poles for trekking and skanidnava walking', //2.3
            'dishes and fire accessories', //2.4
            'accessories for tents', //2.5
        ]
    },
    {
        title: 'equipment', //3
        subcategories: [
            'fuel equipment', //3.1
            'knives and tools', //3.2
            'lanterns', //3.3
            'hammocks', //3.4
            'electronics', //3.5
            'binoculars', //3.6
            'compasses', //3.7
        ]
    },
    {
        title: 'accessories', //4
        subcategories: [
            'travel accessories', //4.1
            'insulated bags and containers', //4.2
            'protection from insects', //4.3
            'first aid', //4.4
            'other', //4.5
        ]
    },
]

class Item {
    constructor(id, imgs, title, category, subcategory, description, price) {
        this.id = id
        this.imgs = imgs
        this.title = title
        this.description = description
        this.category = category
        this.subcategory = subcategory
        this.price = price
    }
}

const items = []

items.push(new Item("0", [img_1_1_1_1, img_1_1_1_2, img_1_1_1_3],
    "Тент Outventure", "","",
        "Универсальный туристический тент от Outventure.\n"
                + "ВОДОНЕПРОНИЦАЕМОСТЬ:\tПолиуретановое покрытие с показателем водонепроницаемости 2000 мм в.ст. для надежной защиты от дождя.\n"
                + "ПРОСТАЯ СБОРКА:\tТент можно установить, используя треккинговые палки или деревья.\n"
                + "НИЗКИЙ ВЕС:\tТент весит всего 1,22 кг.", "2499")) // 1.1.1


items.push(new Item("1", [img_1_1_2_1, img_1_1_2_2, img_1_1_2_3],
    "Тент Outventure LOUNGE", "", "",
    "Легкий и простой в установке кемпинговый тент отлично подойдет для отдыха на природе. Сумка входит в комплект.\n"
            + "ВМЕСТИТЕЛЬНОСТЬ:\tРазмеры тента (305х305х215 см) позволяют разместиться большой компанией.\n"
            + "ВОДОНЕПРОНИЦАЕМОСТЬ:\tМатериал с показателем водонепроницаемости 3000 мм в.ст. выдерживает даже затяжные дожди. Все швы проклеены.\n"
            + "ВЕНТИЛЯЦИЯ:\tБоковые панели из сетки обеспечивают оптимальную циркуляцию воздуха.", "8999")) // 1.1.2

const testItem = new Item(
    "2",
    [ img_1, img_2, img_3, img_4, img_5, img_6 ],
    "Сумка пикниковая на 4 персоны Outventure, 2021",
    "",
    "",
    "Вместительная сумка для пикника рассчитана на 4 персоны и оснащена всеми необходимыми приборами для наиболее комфортной трапезы. " +
    "Тарелки и чашки изготовлены из пластика, ножи, вилки и ложки — из качественной нержавеющей стали. " +
    "Размеры сумки 54х23х30 см. Объем 25 л.\n" +
    "Комплектация:\t4 тарелки, 4 салфетки, 4 ложки, 4 вилки, 4 ножа, 4 бокала для вина, открывалка, солонка, перечница.",
    "5499"
)

export default {categories, items, testItem}
