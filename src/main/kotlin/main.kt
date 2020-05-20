import components.app
import data.*
import react.dom.render
import react.router.dom.browserRouter
import redux.*
import kotlin.browser.document
import wrapper.reduxLogger

val store = createStore(
    ::changeReducer,
    State(bookList, authorList, genreList, favs = arrayOf()),
    compose(
        rEnhancer(),
        applyMiddleware(
            reduxLogger.logger as Middleware<State, Action, Action, Action, Action>
        )
    )
)

val rootDiv = document.getElementById("root")

fun render () = render(rootDiv) {
    browserRouter {
        app(bookList, authorList, genreList, store)
    }
}

fun main() {
    render()
    store.subscribe {
        render()
    }
}
