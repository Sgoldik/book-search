package containers
import components.*
import data.*
import hoc.withDisplayName
import org.w3c.dom.events.Event
import react.RBuilder
import react.RClass
import react.RProps
import react.invoke
import react.redux.rConnect
import redux.*

interface BookDispatchProps : RProps {
    var addFav: (Int) -> Unit
    var addReview: (Review) -> Unit
}

interface BookStateProps: RProps {
    var author: Author
    var genre: Genre
    var reviews: Map<Int, Review>
    var isFav: Boolean
}

interface BookOwnProps: RProps {
    var book: Pair<Int, Book>
}

val bookContainer =
    rConnect<
            State,
            RAction,
            WrapperAction,
            BookOwnProps,
            BookStateProps,
            BookDispatchProps,
            BookProps>(
        { state, ownProps ->
            author = state.authors.getValue(ownProps.book.second.author) // author
            genre = state.genres.getValue(ownProps.book.second.genre)
            reviews = state.reviews.filter {
                it.value.book == ownProps.book.first
            }
            isFav = state.favs.contains(ownProps.book.first)
        },
        { dispatch, ownProps ->
            addFav =
                {
                    dispatch(ChangeFav(it))
                }
            addReview =
                {
                    dispatch(AddReview(it))
                }
        }
    )(
        withDisplayName(
            "Book",
            fBook
        )
            .unsafeCast<RClass<BookProps>>()
    )

interface AddBookDispatchProps : RProps {
    var addBook: (Book) -> Unit
}

interface AddBookStateProps: RProps {
    var authors: Map<Int, Author>
    var genres: Map<Int, Genre>
}

interface AddBookOwnProps: RProps {

}

val addBookContainer =
    rConnect<
            State,
            RAction,
            WrapperAction,
            AddBookOwnProps,
            AddBookStateProps,
            AddBookDispatchProps,
            AddBookProps>(
        { state, ownProps ->
            authors = state.authors
            genres = state.genres
        },
        { dispatch, ownProps ->
            addBook =
                {
                    dispatch(AddBook(it))
                }
        }
    )(
        withDisplayName(
            "AddBook",
            fAddBook
        )
            .unsafeCast<RClass<AddBookProps>>()
    )