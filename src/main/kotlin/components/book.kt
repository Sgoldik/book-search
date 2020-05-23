package components

import data.*
import hoc.withDisplayName
import kotlinext.js.getOwnPropertyNames
import kotlinx.html.InputType
import kotlinx.html.id
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLInputElement
import react.*
import react.dom.*
import org.w3c.dom.events.Event
import react.router.dom.navLink
import kotlin.browser.document
import kotlin.browser.window


interface BookTableItemProps : RProps {
    var books: Map<Int, Book>
    var authors: Map<Int, Author>
    var genres: Map<Int, Genre>
}

fun fBookTableItem () =
    functionalComponent<BookTableItemProps> { props ->
        props.books.map { book ->
            tr {
                td ("book-image"){
                    img ("img", book.value.image, "book-image-pic") {

                    }
                }
                td {
                    + book.value.name
                }
                td {
                    + props.authors.getValue(book.value.author).toString()
                }
                td {
                    + book.value.created
                }
                td {
                    + props.genres.getValue(book.value.genre).toString()
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

fun RBuilder.bookTableItem(
    books: Map<Int, Book>,
    authors: Map<Int, Author>,
    genres: Map<Int, Genre>
) = child(
    withDisplayName("Table Item", fBookTableItem())
) {
    attrs.books = books
    attrs.authors = authors
    attrs.genres = genres
}

interface BookProps : RProps {
    var book: Pair<Int, Book>
    var author: Author
    var genre: Genre
    var reviews: Map<Int, Review>
    var addFav: (Event) -> Unit
    var isFav: Boolean
}

val fBook =
    functionalComponent<BookProps> { props ->
        div ("book-more"){
            div ("book-more-img") {
                img (props.book.second.name, props.book.second.image, classes = "book-more-pic") {}
            }
            div ("book-more-desc") {
                div ("book-more-desc-item"){
                    + "Автор: ${props.author.toString()}"
                }
                div ("book-more-desc-item") {
                    + "Жанр: ${props.genre.name}"
                }
                div ("book-more-desc-item") {
                    + "Дата издания: ${props.book.second.created}"
                }
                button (classes = "book-button"){
                    if (props.isFav) +"Удалить из избранного" else +"Добавить в избранное"
                    console.log(props.isFav)
                    attrs.onClickFunction = props.addFav

                }
            }

        }
        div ("reviews") {
            div {
                h2 {
                    + "Рецензии"
                }
                props.reviews.values.map {
                    review(it)
                }
            }
            div {
                h2 {
                    + "Оставить рецензию"
                }
                textArea (classes = "review-field") {
                }
                button(classes = "book-button") {
                    + "Отправить"
                }
            }
        }
    }

fun RBuilder.book(
    book: Pair<Int, Book>,
    author: Author,
    genre: Genre,
    reviews: Map<Int, Review>,
    addFav: (Event) -> Unit,
    isFav: Boolean
) = child(fBook) {
    attrs.book = book
    attrs.author = author
    attrs.genre = genre
    attrs.reviews = reviews
    attrs.addFav = addFav
    attrs.isFav = isFav
}

interface BookEditProps : RProps {
    var book: Pair<Int, Book>
    var onClick: (Book) -> Unit
}