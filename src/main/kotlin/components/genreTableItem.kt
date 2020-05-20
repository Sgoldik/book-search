package components

import data.Author
import data.Book
import data.Genre
import hoc.withDisplayName
import kotlinext.js.getOwnPropertyNames
import react.*
import react.dom.*
import org.w3c.dom.events.Event
import react.router.dom.navLink


interface GenreTableItemProps : RProps {
    var genres: Array<Genre>
}

fun fGenreTableItem () =
    functionalComponent<GenreTableItemProps> { props ->
        props.genres.mapIndexed { index, genre ->
            tr {
                genre.getProperies().mapIndexed { _, prop ->
                    td {
                        + prop.toString()
                    }
                }
                td {
                    navLink("/genres/${index}") {
                        button(classes = "book-button") {
                            +"Подробнее"
                        }
                    }
                }
            }

        }
    }

fun RBuilder.genreTableItem(
    genres: Array<Genre>
) = child(
    withDisplayName("Genre Table Item", fGenreTableItem())
) {
    attrs.genres = genres
}