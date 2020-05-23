package containers

import component.AnyInfoProps
import component.fAnyInfo
import component.favs
import components.*
import data.*
import hoc.withDisplayName
import org.w3c.dom.events.Event
import react.*
import redux.*
import react.redux.rConnect

interface AnyInfoDispatchProps : RProps {
    var addFav: (Int) -> (Event) -> Unit
}

interface AnyInfoStateProps<O, S, T> : RProps {
    var sub1: O
    var sub2: S
    var sub3: T
    var isFav: Boolean
}

interface AnyInfoOwnProps<O> : RProps {
    var obj: Pair<Int, O>
}


val bookInfoContainer =
    rConnect<
            State,
            RAction,
            WrapperAction,
            AnyInfoOwnProps<Book>,
            AnyInfoStateProps<Author, Genre, Map<Int, Review>>,
            AnyInfoDispatchProps,
            AnyInfoProps<Pair<Int, Book>, Author, Genre, Map<Int, Review>>>(
        { state, ownProps ->
            sub1 = state.authors.getValue(ownProps.obj.second.author) // author
            sub2 = state.genres.getValue(ownProps.obj.second.genre)
            sub3 = state.reviews.filter {
                it.value.book == ownProps.obj.first
            }
            isFav = state.favs.contains(ownProps.obj.first)
        },
        { dispatch, ownProps ->
            addFav =
                { index ->
                    {
                        dispatch(ChangeFav(index))
                    }
                }
        }
    )(
        withDisplayName(
            "LessonInfo",
            fAnyInfo<Book, Author, Genre, Map<Int, Review>>(RBuilder::book)
        )
            .unsafeCast<RClass<AnyInfoProps<Pair<Int, Book>, Author, Genre, Map<Int, Review>>>>()
    )

val authorInfoContainer =
    rConnect<
            State,
            RAction,
            WrapperAction,
            AnyInfoOwnProps<Author>,
            AnyInfoStateProps<Map<Int,Book>, Map<Int, Genre>, Map<Int,Review>>,
            AnyInfoDispatchProps,
            AnyInfoProps<Pair<Int, Author>, Book, Genre, Map<Int, Review>>>(
        { state, ownProps ->
            sub1 = state.books.filter {
                it.value.author == ownProps.obj.first
            }
            sub2 = sub1.map {
                it.key to state.genres.getValue(it.value.genre)
            }.toMap()
        },
        { dispatch, ownProps ->
            addFav = { index ->
                {
                    dispatch(ChangeFav(index))
                }
            }
        }
    )(
        withDisplayName(
            "AuthorInfo",
            fAnyInfo<Author, Map<Int, Book>, Map<Int, Genre>, Map<Int,Review>>(RBuilder::author)
        )
            .unsafeCast<RClass<AnyInfoProps<Pair<Int, Author>, Book, Genre, Map<Int, Review>>>>()
    )