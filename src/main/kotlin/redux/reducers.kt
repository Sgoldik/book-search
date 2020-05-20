package redux

import data.*

fun changeReducer(state: State, action: RAction) =
    when (action) {
        is AddAuthor -> State (
            state.books,
            state.authors.plus(Author(action.name, action.surname, "")),
            state.genres,
            state.favs
        )
        is EditAuthor -> State (
            state.books,
            state.authors.mapIndexed { indexAuthor, author ->
                if (indexAuthor == action.index) {
                    Author(action.firstname, action.surname, "")
                } else
                    author

            }.toTypedArray(),
            state.genres,
            state.favs
        )
        else -> state

    }