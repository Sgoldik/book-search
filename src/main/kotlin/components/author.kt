package components

import containers.booksTableContainer
import data.*
import hoc.withDisplayName
import kotlinext.js.getOwnPropertyNames
import kotlinx.html.id
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTextAreaElement
import react.*
import react.dom.*
import org.w3c.dom.events.Event
import react.router.dom.navLink
import kotlin.browser.document


interface AuthorTableItemProps : RProps {
    var authors: Map<Int, Author>
    var books: Map<Int, Book>
    var genres: Map<Int, Genre>
}

fun fAuthorTableItem () =
    functionalComponent<AuthorTableItemProps> { props ->
        props.authors.values.mapIndexed { index, author ->
            tr {
                td ("book-image"){
                    img ("img", author.photo, "book-image-pic") {

                    }
                }
                author.getProperies().mapIndexed { _, prop ->
                    td {
                        + prop.toString()
                    }
                }
                td {
                    navLink("/authors/${index}") {
                        button(classes = "book-button") {
                            +"Подробнее"
                        }
                    }
                }
            }

        }
    }

fun RBuilder.authorTableItem(
    authors: Map<Int, Author>,
    books: Map<Int, Book>,
    genres: Map<Int, Genre>
) = child(
    withDisplayName("Author Table Item", fAuthorTableItem())
) {
    attrs.authors = authors
    attrs.books = books
    attrs.genres = genres
}

interface AuthorProps : RProps {
    var author: Pair<Int, Author>
    var books: Map<Int, Book>
}

val fAuthor =
    functionalComponent<AuthorProps> { props ->
        h2 {
            +props.author.second.toString()
        }
        div ("book-more"){
            div ("book-more-img") {
                img (props.author.toString(), props.author.second.photo, classes = "book-more-pic") {}
            }
            div ("author-books"){
                +"Книги автора:"
                ul {
                    props.books.values.mapIndexed {index, book ->
                            li {
                                navLink("/books/${index}") { + book.name }
                        }
                    }
                }
                +"Книг автора на сайте: ${props.books.values.size}"
            }
        }
    }

fun RBuilder.author(
    author: Pair<Int, Author>,
    books: Map<Int, Book>

) = child(fAuthor) {
    attrs.author = author
    attrs.books = books
}

