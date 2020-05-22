package component

import react.*
import react.dom.*
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import data.*
import react.router.dom.navLink

interface favsProps : RProps {
    var books: Map<Int, Book>
    var authors: Map<Int, Author>
    var genres: Map<Int, Genre>
}

val fFavs =
    functionalComponent<favsProps> { props ->
        props.books.map { book ->
            tr {
                td("book-image") {
                    img("img", book.value.image, "book-image-pic") {

                    }
                }
                td {
                    +book.value.name
                }
                td {
                    +book.value.created
                }
                td {
                    navLink("/books/${book.key}") {
                        button(classes = "book-button") {
                            +"Подробнее"
                        }
                    }
                }

            }
        }
    }

fun RBuilder.favs(
    books: Map<Int, Book>,
    authors: Map<Int, Author>,
    genres: Map<Int, Genre>
) = child(fFavs) {
    attrs.books = books
    attrs.authors = authors
    attrs.genres = genres
}