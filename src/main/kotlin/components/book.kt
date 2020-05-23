package components

import data.*
import hoc.withDisplayName
import kotlinext.js.getOwnPropertyNames
import kotlinx.html.InputType
import kotlinx.html.id
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTextAreaElement
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
    var isFav: Boolean
    var addFav: (Int) -> Unit
    var addReview: (Review) -> Unit
}

val fBook =
    functionalComponent<BookProps> { props ->
        h2 {
            +props.book.second.name
        }
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
                    attrs.onClickFunction = {
                        props.addFav(props.book.first)
                    }

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
            div ("review-container"){
                h2 {
                    + "Оставить рецензию"
                }
                h3 {
                    + "Ваше имя"
                }
                input (classes = "review-input") {
                    attrs.id = "review-name-${props.book.first}-add"
                }
                h3 {
                    +"Комментарий"
                }
                textArea (classes = "review-field") {
                    attrs.id = "review-description-${props.book.first}-add"
                }
                button(classes = "book-button") {
                    + "Отправить"
                    attrs.onClickFunction = {
                        console.log("click")
                        val inputElement = document
                            .getElementById("review-name-${props.book.first}-add")
                                as HTMLInputElement
                        val textAreaElement = document
                            .getElementById("review-description-${props.book.first}-add")
                                as HTMLTextAreaElement
                        console.log(inputElement.value, textAreaElement.value)

                        props.addReview(Review(inputElement.value, props.book.first, textAreaElement.value))
                    }
                }
            }
        }
    }

fun RBuilder.book(
    book: Pair<Int, Book>,
    author: Author,
    genre: Genre,
    reviews: Map<Int, Review>,
    isFav: Boolean,
    addFav: (Int) -> Unit,
    addReview: (Review) -> Unit
) = child(fBook) {
    attrs.book = book
    attrs.author = author
    attrs.genre = genre
    attrs.reviews = reviews
    attrs.isFav = isFav
    attrs.addFav = addFav
    attrs.addReview = addReview
}

interface BookEditProps : RProps {
    var book: Pair<Int, Book>
    var onClick: (Book) -> Unit
}