package containers
import components.AuthorProps
import components.author
import components.fAuthor
import data.*
import hoc.withDisplayName
import react.RBuilder
import react.RClass
import react.RProps
import react.invoke
import react.redux.rConnect
import redux.RAction
import redux.WrapperAction


interface AuthorDispatchProps : RProps {

}

interface AuthorStateProps: RProps {
    var books: Map<Int, Book>
}

interface AuthorOwnProps: RProps {
    var author: Pair<Int, Author>
}

val authorContainer =
    rConnect<
            State,
            RAction,
            WrapperAction,
            AuthorOwnProps,
            AuthorStateProps,
            AuthorDispatchProps,
            AuthorProps>(
        { state, ownProps ->
            books = state.books.filter {
                it.value.author == ownProps.author.first
            }
        },
        { dispatch, ownProps ->

        }
    )(
        withDisplayName(
            "Author",
            fAuthor
        )
            .unsafeCast<RClass<AuthorProps>>()
    )