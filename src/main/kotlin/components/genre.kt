package component

import react.*
import react.dom.*
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import data.*

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