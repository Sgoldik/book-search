package component

import hoc.withDisplayName
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import react.functionalComponent

interface AnyInfoProps<O, T> : RProps {
    var obj: O
    var sub: T
}

fun <O, T> fAnyInfo(
    rComponent: RBuilder.(O, T) -> ReactElement
) =
    functionalComponent<AnyInfoProps<O, T>> { props ->
        h3 {
            +props.obj.toString()
        }
        rComponent(props.obj, props.sub)
    }

fun <O, T> RBuilder.anyInfo(
    rComponent: RBuilder.(O, T) -> ReactElement,
    obj: O,
    sub: T
) = child(
    withDisplayName("Full",  fAnyInfo<O, T>(rComponent))
){
    attrs.obj = obj
    attrs.sub = sub
}