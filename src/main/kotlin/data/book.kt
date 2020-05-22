package data

import store

data class Book (
    var name: String,
    var author: Int,
    var created: String,
    var image: String,
    var genre: Int
) {
    override fun toString(): String = name
    fun getProperies(): Array<Any> = arrayOf(
        name,
        author,
        created,
        genre.toString()
    )
}

fun bookList() = arrayOf(
    Book("Гарри Поттер и узник Азкабана",  0, "2017", "https://s1.livelib.ru/boocover/1002686425/140/daa2/Dzh._K._Rouling__Garri_Potter_i_uznik_Azkabana.jpg", 0),
    Book("Зеленая миля", 1, "2020", "https://s1.livelib.ru/boocover/1003823201/140/57e3/Stiven_King__Zelenaya_milya.jpg", 1),
    Book("Унесенные ветром", 2, "2020","https://s1.livelib.ru/boocover/1003634473/140/3ca5/Margaret_Mitchell__Unesennye_vetrom.jpg", 2),
    Book("Прислуга", 3, "2016", "https://s1.livelib.ru/boocover/1001569364/140/bdff/Ketrin_Stokett__Prisluga.jpg", 3),
    Book("Граф Монте-Кристо", 4, "2019", "https://s1.livelib.ru/boocover/1003012244/140/4d2a/Aleksandr_Dyuma__Graf_MonteKristo.jpg", 4)
)