package component

import react.*
import react.dom.*
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import data.*

interface AuthorProps : RProps {
    var author: Author
    var books: Array<Book?>
}

val fAuthor =
    functionalComponent<AuthorProps> { props ->
        div ("book-more"){
            div ("book-more-img") {
                img (props.author.toString(), props.author.photo, classes = "book-more-pic") {}
            }
            div ("author-books"){
                +"Книги автора:"
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

fun RBuilder.author(
    author: Author,
    books: Array<Book?>
) = child(fAuthor) {
    attrs.author = author
    attrs.books = books
}