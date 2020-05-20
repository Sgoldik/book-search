package components

import data.Book
import hoc.withDisplayName
import kotlinext.js.getOwnPropertyNames
import react.*
import react.dom.*
import org.w3c.dom.events.Event
import react.router.dom.navLink


interface BookTableItemProps : RProps {
    var books: Array<Book>
}

fun fBookTableItem () =
    functionalComponent<BookTableItemProps> { props ->
        props.books.mapIndexed { index, book ->
            tr {
                td ("book-image"){
                    img ("img", book.image, "book-image-pic") {

                    }
                }
                book.getProperies().mapIndexed { _, prop ->
                    td {
                        + prop.toString()
                    }
                }
                td {
                    navLink("/books/${index}") {
                        button(classes = "book-button") {
                            +"Подробнее"
                        }
                    }
                }

            }

        }
    }

fun RBuilder.bookTableItem(
    books: Array<Book>
) = child(
    withDisplayName("Table Item", fBookTableItem())
) {
    attrs.books = books
}