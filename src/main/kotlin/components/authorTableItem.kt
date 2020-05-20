package components

import data.Author
import data.Book
import hoc.withDisplayName
import kotlinext.js.getOwnPropertyNames
import react.*
import react.dom.*
import org.w3c.dom.events.Event
import react.router.dom.navLink


interface AuthorTableItemProps : RProps {
    var authors: Array<Author>
}

fun fAuthorTableItem () =
    functionalComponent<AuthorTableItemProps> { props ->
        props.authors.mapIndexed { index, author ->
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
    authors: Array<Author>
) = child(
    withDisplayName("Author Table Item", fAuthorTableItem())
) {
    attrs.authors = authors
}