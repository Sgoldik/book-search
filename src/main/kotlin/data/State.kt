package data

typealias AuthorsState = Map<Int, Author>

typealias BooksState = Map<Int, Book>

typealias GenresState = Map<Int, Genre>

typealias FavsState = Array<Int>

class State (
    val books: BooksState,
    val authors: AuthorsState,
    val genres: GenresState,
    val favs: FavsState = arrayOf(3)
)

fun <T> Map<Int, T>.newId() =
    (this.maxBy { it.key }?.key ?: 0) + 1

fun initialState() =
    State(
        bookList().mapIndexed { index, book ->
            index to book
        }.toMap(),
        authorList().mapIndexed { index, author ->
            index to author
        }.toMap(),
        genreList().mapIndexed { index, genre ->
            index to genre
        }.toMap()
    )