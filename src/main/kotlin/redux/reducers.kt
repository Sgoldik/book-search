import data.*
import redux.*

fun booksReducer(state: BooksState, action: RAction, newId: Int = -1) =
    when (action) {
        is AddBook -> state + (newId to action.book)
        else -> state
    }

fun authorsReducer(state: AuthorsState, action: RAction, newId: Int = -1) =
    state

fun genresReducer(state: GenresState, action: RAction, newId: Int = -1) =
    state

fun favsReducer(state: FavsState, action: RAction, newId: Int = -1) =
    when (action) {
        is ChangeFav ->
            state.toMutableList().apply {
                if (this.contains(action.id))
                    this.remove(action.id)
                else
                    this.add(action.id)
            }.toTypedArray()
        else -> state
    }

fun reviewsReducer(state: ReviewsState, action: RAction, newId: Int = -1) =
    when (action) {
        is AddReview -> state + (newId to action.review)
        else -> state
    }

fun rootReducer(state: State, action: RAction) =
    when (action) {
        is AddBook -> {
            val id = state.books.newId()
            State(
                booksReducer(state.books, action, id),
                authorsReducer(state.authors, action),
                genresReducer(state.genres, action),
                reviewsReducer(state.reviews, action),
                favsReducer(state.favs, action)
            )
        }
        is ChangeFav -> {
            State(
                booksReducer(state.books, action),
                authorsReducer(state.authors, action),
                genresReducer(state.genres, action),
                reviewsReducer(state.reviews, action),
                favsReducer(state.favs, action)
            )
        }
        is AddReview -> {
            val id = state.reviews.newId()
            State(
                booksReducer(state.books, action),
                authorsReducer(state.authors, action),
                genresReducer(state.genres, action),
                reviewsReducer(state.reviews, action, id),
                favsReducer(state.favs, action, id)
            )
        }
        else ->
            State(
                booksReducer(state.books, action),
                authorsReducer(state.authors, action),
                genresReducer(state.genres, action),
                reviewsReducer(state.reviews, action),
                favsReducer(state.favs, action)
            )
    }