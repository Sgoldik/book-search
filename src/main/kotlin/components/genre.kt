package components

import data.Author
import data.Book
import data.Genre
import hoc.withDisplayName
import kotlinext.js.getOwnPropertyNames
import react.*
import react.dom.*
import org.w3c.dom.events.Event
import react.router.dom.navLink


interface GenreTableItemProps : RProps {
    var genres: Map<Int, Genre>
}

fun fGenreTableItem () =
    functionalComponent<GenreTableItemProps> { props ->
        props.genres.values.mapIndexed { index, genre ->
            tr {
                genre.getProperies().mapIndexed { _, prop ->
                    td {
                        + prop.toString()
                    }
                }
                td {
                    navLink("/genres/${index}") {
                        button(classes = "book-button") {
                            +"Подробнее"
                        }
                    }
                }
            }

        }
    }

fun RBuilder.genreTableItem(
    genres: Map<Int, Genre>
) = child(
    withDisplayName("Genre Table Item", fGenreTableItem())
) {
    attrs.genres = genres
}

interface GenreProps : RProps {
    var genre: Genre
    var books: Array<Book?>
}

val fGenre =
    functionalComponent<GenreProps> { props ->
        div ("book-more"){
            div ("book-more-desc") {
                + "Книги этого жанра: "
                ul {
                    props.books.mapIndexed {index, book ->
                        if (book != null) {
                            li {
                                + book.name
                            }
                        }
                    }
                }
            }

        }
    }

fun RBuilder.genre(
    genre: Genre,
    books: Array<Book?>
) = child(fGenre) {
    attrs.genre = genre
    attrs.books = books
}