package data

data class Genre (
    var name: String
) {
    override fun toString(): String = name

    fun getProperies(): Array<Any> = arrayOf(
        name
    )
}

fun genreList() =
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