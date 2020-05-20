package data

data class Book (
    var name: String,
    var author: Author,
    var created: String,
    var image: String,
    var genre: Genre
) {
    override fun toString(): String = name
    fun getProperies(): Array<Any> = arrayOf(
        name,
        author.toString(),
        created,
        genre.toString()
    )
}

val genreList =
    arrayOf(
        Genre("Бизнес-книги"),
        Genre("Классическая литература"),
        Genre("Зарубежная литература"),
        Genre("Русская литература"),
        Genre("Детские книги"),
        Genre("Детективы"),
        Genre("Фэнтези"),
        Genre("Фантастика"),
        Genre("Современная проза"),
        Genre("Приключения"),
        Genre("Ужасы, мистика"),
        Genre("Публицистическая литература")
    )

val bookList: Array<Book> = arrayOf(
    Book("Гарри Поттер и узник Азкабана",  data.authorList[0], "2017", "https://s1.livelib.ru/boocover/1002686425/140/daa2/Dzh._K._Rouling__Garri_Potter_i_uznik_Azkabana.jpg", genreList[0]),
    Book("Зеленая миля", authorList[1], "2020", "https://s1.livelib.ru/boocover/1003823201/140/57e3/Stiven_King__Zelenaya_milya.jpg", genreList[1]),
    Book("Унесенные ветром", authorList[2], "2020","https://s1.livelib.ru/boocover/1003634473/140/3ca5/Margaret_Mitchell__Unesennye_vetrom.jpg", genreList[2]),
    Book("Прислуга", authorList[3], "2016", "https://s1.livelib.ru/boocover/1001569364/140/bdff/Ketrin_Stokett__Prisluga.jpg", genreList[3]),
    Book("Граф Монте-Кристо", authorList[4], "2019", "https://s1.livelib.ru/boocover/1003012244/140/4d2a/Aleksandr_Dyuma__Graf_MonteKristo.jpg", genreList[4])
)