package data

data class Genre (
    var name: String
) {
    override fun toString(): String = name

    fun getProperies(): Array<Any> = arrayOf(
        name
    )
}
