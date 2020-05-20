package components

import component.*
import data.*
import hoc.withDisplayName
import kotlinext.js.getOwnPropertyNames
import react.*
import react.dom.*
import react.router.dom.*
import redux.*

interface AppProps : RProps {
    var books: Array<Book>
    var authors: Array<Author>
    var genres: Array<Genre>
    var store: Store<State, RAction, WrapperAction>
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
                    li("navigation-item") { navLink("/genres") { +"Жанры" } }
                    li("navigation-item") { navLink("/fav") { +"Избранные книги" } }
                }
            }
        }

        switch {
            redirect("/","books",true,true,true)
            route("/books",
                exact = true,
                render = {
                    anyTable(
                        RBuilder::bookTableItem,
                        props.store.getState().books,
                        arrayOf("Превью", "Название", "Автор", "Год издания", "Жанр", "Информация"),
                        "Книги",
                        "/books"
                    )
                }
            )
            route("/books/:number",
                exact = true,
                render = renderBook(props)
            )
            route("/authors",
                exact = true,
                render = {
                    anyTable(
                        RBuilder::authorTableItem,
                        props.store.getState().authors,
                        arrayOf("Превью", "Имя автора", "Информация"),
                        "Авторы",
                        "/authors"
                    )
                }
            )
            route("/authors/:number",
                exact = true,
                render = renderAuthor(props)
            )
            route("/genres",
                exact = true,
                render = renderGenres(props)
            )
            route("/genres/:number",
                exact = true,
                render = renderGenre(props)
            )
            route("/fav",
                exact = true,
                render = renderFavBooks(props)
            )
        }
    }

fun RBuilder.renderBook(props: AppProps) =
    { route_props: RouteResultProps<RouteNumberResult> ->
        val num = route_props.match.params.number.toIntOrNull() ?: -1
        val book = props.store.getState().books.getOrNull(num)
        if (book != null)
            anyInfo(
                RBuilder::book,
                book,
                num
            )
        else
            p { +"No such book"}
    }

fun RBuilder.renderAuthor(props: AppProps) =
    { route_props: RouteResultProps<RouteNumberResult> ->
        val num = route_props.match.params.number.toIntOrNull() ?: -1
        val author = props.store.getState().authors.getOrNull(num)
        if (author != null) {
            var authorBooks = props.store.getState().books.map { book ->
                if (book.author == author) book else null
            }.toTypedArray()
            anyInfo(
                RBuilder::author,
                author,
                authorBooks
            )
        } else {
            p { +"No such book" }
        }
    }

fun RBuilder.renderGenres(props: AppProps) =
    { ->
        anyTable(
            RBuilder::genreTableItem,
            props.store.getState().genres,
            arrayOf("Название жанра", "Информация"),
            "Жанры",
            "/genres"
        )
    }
fun RBuilder.renderFavBooks(props: AppProps) =
    { ->
        if (props.store.getState().favs.isNotEmpty()) {
            favBooks(
                props.store.getState().books,
                1
            )
        } else
            p { +"У вас нет избранных книг."}
    }

fun RBuilder.renderGenre(props: AppProps) =
    { route_props: RouteResultProps<RouteNumberResult> ->
        val num = route_props.match.params.number.toIntOrNull() ?: -1
        val genre = props.store.getState().genres.getOrNull(num)
        if (genre != null) {
            var genreBooks = props.store.getState().books.map { book ->
                if (book.genre == genre) book else null
            }.toTypedArray()
            anyInfo(
                RBuilder::genre,
                genre,
                genreBooks
            )
        } else {
            p { +"Такого жанра нет." }
        }
    }

fun RBuilder.app (
    books: Array<Book>,
    authors: Array<Author>,
    genres: Array<Genre>,
    store: Store<State, RAction, WrapperAction>
) =
    child (
        withDisplayName("App", fApp())
    ) {
        attrs.books = books
        attrs.authors = authors
        attrs.genres = genres
        attrs.store = store
    }