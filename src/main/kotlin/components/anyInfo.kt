package component

import hoc.withDisplayName
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import react.functionalComponent

interface AnyInfoProps<O, T, S> : RProps {
    var obj: Pair<Int, O>
    var sub1: T
    var sub2: S
    var addFav: (Int) -> (Event) -> Unit
    var isFav: Boolean
}

fun <O, T, S> fAnyInfo(
    rComponent: RBuilder.(Pair<Int, O>, T, S, (Event) -> Unit, Boolean) -> ReactElement
) =
    functionalComponent<AnyInfoProps<O, T, S>> { props ->
        h3 {
            +props.obj.second.toString()
        }
        rComponent(props.obj, props.sub1, props.sub2, props.addFav(props.obj.first), props.isFav)
    }