package containers

import component.favs
import components.*
import data.*
import hoc.withDisplayName
import org.w3c.dom.events.Event
import react.*
import react.redux.rConnect
import redux.*

interface AnyTableDispatchProps : RProps {
    var add: (Event) -> Unit
    var remove: (Int) -> Unit
}

interface AnyTableStateProps<O, S, T> : RProps {
    var objs: Map<Int, O>
    var titles: Array<String>
    var sub1: Map<Int, S>
    var sub2: Map<Int, T>
}

val authorsTableHOC =
    rConnect<
            State,
            RAction,
            WrapperAction,
            RProps,                         // Own Props
            AnyTableStateProps<Author, Book, Genre>,
            AnyTableDispatchProps,
            AnyTableProps<Author, Book, Genre>
            >(
        mapStateToProps = { state, _ ->
            objs = state.authors
            titles = arrayOf("Превью", "Имя автора", "Информация")
        },
        mapDispatchToProps = { dispatch, _ ->
            // add = { dispatch(AddAuthor(Author("new", "student", ""))) }
            // remove = { dispatch(RemoveAuthor(it)) }
        }
    )

val authorTableRClass =
    withDisplayName(
        "AuthorList",
        fAnyTable (
            "Авторы",
            "/authors",
            RBuilder:: authorTableItem
        )
    )
        .unsafeCast<RClass<AnyTableProps<Author, Book, Genre>>>()

val authorsTableContainer =
    authorsTableHOC(authorTableRClass)

val booksTableContainer =
    rConnect<
            State,
            RAction,
            WrapperAction,
            RProps,
            AnyTableStateProps<Book, Author, Genre>,
            AnyTableDispatchProps,
            AnyTableProps<Book, Author, Genre>
            >(
        { state, _ ->
            objs = state.books
            titles = arrayOf("Превью", "Название", "Автор", "Год издания", "Жанр", "Информация")
            sub1 = state.authors
            sub2 = state.genres
        },
        { dispatch, _ ->
            // add = { dispatch(AddBook(Book("new lesson", 0, "2017", "", 0))) }
            // remove = { dispatch(RemoveBook(it)) }
        }
    )(
        withDisplayName(
            "BookList",
            fAnyTable (
                "Книги",
                "/books",
                RBuilder:: bookTableItem
            )
        )
            .unsafeCast<RClass<AnyTableProps<Book, Author, Genre>>>()
    )

val favsTableContainer =
    rConnect<
            State,
            RAction,
            WrapperAction,
            RProps,
            AnyTableStateProps<Book, Author, Genre>,
            AnyTableDispatchProps,
            AnyTableProps<Book, Author, Genre>
            >(
        { state, _ ->
            objs = state.favs.map { fav ->
                fav to state.books.getValue(fav)
            }.toMap()
            titles = arrayOf("Превью", "Название", "Дата издания", "Информация")
        },
        { dispatch, _ ->
            // add = { dispatch(AddBook(Book("new lesson", 0, "2017", "", 0))) }
            // remove = { dispatch(RemoveBook(it)) }
        }
    )(
        withDisplayName(
            "FavsTableItem",
            fAnyTable (
                "Понравившиеся книги",
                "/favs",
                RBuilder:: favs
            )
        )
            .unsafeCast<RClass<AnyTableProps<Book, Author, Genre>>>()
    )