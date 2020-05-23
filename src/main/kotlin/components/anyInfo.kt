package component

import data.Review
import hoc.withDisplayName
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import react.functionalComponent

interface AnyInfoProps<O, T, S, Z> : RProps {
    var obj: Pair<Int, O>
    var sub1: T
    var sub2: S
    var sub3: Z
    var addFav: (Int) -> (Event) -> Unit
    var isFav: Boolean
    var addReview: (Review) -> (Event) -> Unit
}

fun <O, T, S, Z> fAnyInfo(
    rComponent: RBuilder.(Pair<Int, O>, T, S, Z, (Event) -> Unit, Boolean, (Review) -> (Event) -> Unit) -> ReactElement
) =
    functionalComponent<AnyInfoProps<O, T, S, Z>> { props ->
        h2 {
            +props.obj.second.toString()
        }
        rComponent(props.obj, props.sub1, props.sub2, props.sub3, props.addFav(props.obj.first), props.isFav, props.addReview)
    }