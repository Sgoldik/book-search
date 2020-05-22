package containers

import react.*
import react.redux.rConnect
import component.*
import components.AppProps
import components.fApp
import data.*
import hoc.withDisplayName

val appContainer =
    rConnect<State, RProps, AppProps>(
        { state, _ ->
            books = state.books
            authors = state.authors
        },
        {
            pure = false  // side effect of React Route
        }
    )(
        withDisplayName(
            "MyApp",
            fApp()
        )
            .unsafeCast<RClass<AppProps>>()
    )