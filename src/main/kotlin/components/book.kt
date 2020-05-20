package component

import react.*
import react.dom.*
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import data.*

interface BookProps : RProps {
    var book: Book
    var author: Int
}

val fBook =
    functionalComponent<BookProps> { props ->
        div ("book-more"){
            div ("book-more-img") {
                img (props.book.name, props.book.image, classes = "book-more-pic") {}
            }
            div ("book-more-desc") {
                div ("book-more-desc-item"){
                    + "Автор: ${props.book.author.toString()}"
                }
                div ("book-more-desc-item") {
                    + "Жанр: ${props.book.genre.toString()}"
                }
                div ("book-more-desc-item") {
                    + "Дата издания: ${props.book.created}"
                }
                button (classes = "book-button"){
                    + "Добавить в избранное"
                }
            }

        }
    }

fun RBuilder.book(
    book: Book,
    author: Int
) = child(fBook) {
    attrs.book = book
    attrs.author = author
}