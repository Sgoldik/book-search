package data

data class Review (
    val author: String,
    val book: Int,
    val review: String
) {
    override fun toString(): String = review
}

fun reviewList() =
    arrayOf(
        Review("Tester", 0, "С другой стороны повышение уровня гражданского сознания влечет за собой процесс внедрения и модернизации системы масштабного изменения ряда параметров! Соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует повышению актуальности ключевых компонентов планируемого обновления? Равным образом новая модель организационной деятельности способствует подготовке и реализации дальнейших направлений развития проекта."),
        Review("Root", 1, "Разнообразный и богатый опыт рамки и место обучения кадров требует определения и уточнения позиций, занимаемых участниками в отношении поставленных задач."),
        Review("Qwerty", 2, "Равным образом выбранный нами инновационный путь играет важную роль в формировании существующих финансовых и административных условий."),
        Review("Heisenberg", 3, "Значимость этих проблем настолько очевидна, что новая модель организационной деятельности играет важную роль в формировании новых предложений? Не следует, однако, забывать о том, что повышение уровня гражданского сознания напрямую зависит от новых предложений."),
        Review("Tester", 4, "Дорогие друзья, реализация намеченного плана развития требует от нас анализа форм воздействия. "),
        Review("Genius 11", 0, "Равным образом сложившаяся структура организации способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же реализация намеченного плана развития обеспечивает актуальность системы масштабного изменения ряда параметров."),
        Review("Adil", 0, "Дорогие друзья, консультация с профессионалами из IT требует от нас анализа экономической целесообразности принимаемых решений.")
    )