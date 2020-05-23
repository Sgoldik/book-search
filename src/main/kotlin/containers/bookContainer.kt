package containers

import component.AnyInfoProps
import component.fAnyInfo
import components.BookProps
import components.book
import components.fBook
import data.*
import hoc.withDisplayName
import org.w3c.dom.events.Event
import react.RBuilder
import react.RClass
import react.RProps
import react.invoke
import react.redux.rConnect
import redux.AddReview
import redux.ChangeFav
import redux.RAction
import redux.WrapperAction

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