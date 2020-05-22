package components

import component.favs
import containers.*
import data.*
import hoc.withDisplayName
import kotlinext.js.getOwnPropertyNames
import react.*
import react.dom.*
import react.router.dom.*
import redux.*

interface AppProps : RProps {
    var books: Map<Int, Book>
    var authors: Map<Int, Author>
    var genres: Map<Int, Genre>
    var favs: Array<Int>
}

interface RouteNumberResult : RProps {
    var number: String
}

fun fApp () =
    functionalComponent<AppProps> { props ->
        header {
            h1 { +"КнигоПоиск" }
            nav {
                ul("navigation") {
                    li("navigation-item") { navLink("/books") { +"Книги" } }
                    li("navigation-item") { navLink("/authors") { +"Авторы" } }
                    li("navigation-item") { navLink("/favs") { +"Избранные книги" } }
                }
            }
        }

        switch {
            redirect("/","books",true,true,true)
            route("/books",
                exact = true,
                render = {
                    booksTableContainer { }
                }
            )
            route("/books/:number",
                exact = true,
                render = renderObject(
                    { props.books[it] },
                    { index, book ->
                        bookInfoContainer {
                            attrs.obj = index to book
                        }
                    }
                )
            )
            route("/authors",
                exact = true,
                render = {
                    authorsTableContainer {}
                }
            )
            route("/authors/:number",
                exact = true,
                render = renderObject(
                    { props.authors[it] },
                    { index, author ->
                        authorInfoContainer {
                            attrs.obj = index to author
                        }
                    }
                )
            )
//            route("/genres",
//                exact = true,
//                render = {
//                    genresTableContainer {}
//                }
//            )
//            route("/genres/:number",
//                exact = true,
//                render = renderGenre(props)
//            )
            route("/favs",
                exact = true,
                render = {
                    favsTableContainer { }
                }
            )
        }
    }

fun <O> RBuilder.renderObject(
    selector: (Int) -> O?,
    rElement: (Int, O) -> ReactElement
) =
    { route_props: RouteResultProps<RouteNumberResult> ->
        val num = route_props.match.params.number.toIntOrNull() ?: -1
        val obj = selector(num)
        if (obj != null)
            rElement(num, obj)
        else
            p { +"Object not found" }
    }