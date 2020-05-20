package component

import react.*
import react.dom.*
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import data.*

interface favBooksProps : RProps {
    var books: Array<Book>
    var author: Int
}

val fFavBooks =
    functionalComponent<favBooksProps> { props ->
        +"Понравившиеся книги: "
        ul {
            props.books.mapIndexed {index, book ->
                li {
                    + book.name
                }
            }
        }
    }

fun RBuilder.favBooks(
    books: Array<Book>,
    author: Int
) = child(fFavBooks) {
    attrs.books = books
    attrs.author = author
}