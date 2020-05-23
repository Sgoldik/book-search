import data.*
import redux.*

fun booksReducer(state: BooksState, action: RAction, newId: Int = -1) =
    when (action) {
        is AddBook -> state + (newId to action.book)
        is RemoveBook -> state.minus(action.id)
        is ChangeBook ->
            state.toMutableMap()
                .apply {
                    this[action.id] = action.newBook
                }
        else -> state
    }

fun authorsReducer(state: AuthorsState, action: RAction, newId: Int = -1) =
    when (action) {
        is AddAuthor -> state + (newId to action.author)
        is RemoveAuthor -> state.minus(action.id)
        is ChangeAuthor ->
            state.toMutableMap()
                .apply {
                    this[action.id] = action.newAuthor
                }
        else -> state
    }

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

        // is RemoveFav -> state.minus(action.id)
        else -> state
    }

fun reviewsReducer(state: ReviewsState, action: RAction, newId: Int = -1) =
    when (action) {
        is AddReview -> state + (newId to action.review)
        is RemoveReview ->  state.minus(action.id)
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
        is AddAuthor -> {
            val id = state.authors.newId()
            State(
                booksReducer(state.books, action),
                authorsReducer(state.authors, action, id),
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