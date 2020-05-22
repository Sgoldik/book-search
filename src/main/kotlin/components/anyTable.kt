package components

import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import react.functionalComponent

interface AnyTableProps<T, S, O> : RProps {
    var objs: Map<Int, T>
    var titles: Array<String>
    var sub1: Map<Int, S>
    var sub2: Map<Int, O>
}

fun <T, S, O> fAnyTable(
    name: String,
    path: String,
    rItem: RBuilder.(Map<Int, T>, Map<Int, S>, Map<Int, O>) -> ReactElement
) =
    functionalComponent<AnyTableProps<T, S, O>> {props ->
        h2 { +name }
        div ("table-root"){
            table("any-table") {
                tbody {
                    tr {
                        console.log(props.objs)
                        props.titles.map { title ->
                            th {
                                console.log(title)
                                +title
                            }
                        }
                    }
                    rItem(props.objs, props.sub1, props.sub2)

                }
            }
        }
    }