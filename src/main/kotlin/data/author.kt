package data

data class Author (
    var firstname: String,
    var surname: String,
    var photo: String
) {
    override fun toString(): String =
        "$firstname $surname"
    fun getProperies(): Array<Any> = arrayOf(
        "$firstname $surname"
    )
}

val authorList =
    arrayOf(
        Author("Джоан", "Роулинг", "https://im0-tub-ru.yandex.net/i?id=61d4bae88bf5660b56d7feff290ca6f3&n=13"),
        Author("Стивен", "Кинг", "https://avatars.mds.yandex.net/get-zen_doc/1899873/pub_5cd98e2848289800b218c1c6_5cd98f33d3406000b2de37c6/scale_1200"),
        Author("Маргарет", "Митчелл", "https://upload.wikimedia.org/wikipedia/commons/7/7e/Margaret_Mitchell_NYWTS.jpg"),
        Author("Кэтрин", "Стокетт", "https://www4.pictures.zimbio.com/gi/Premiere+DreamWorks+Pictures+Help+Arrivals+b_CUVazIWgEx.jpg"),
        Author("Александр", "Дюма", "https://avatars.mds.yandex.net/get-pdb/1769690/07d1ad61-65a8-43e3-b8e3-61a158263d2c/s1200?webp=false")
    )