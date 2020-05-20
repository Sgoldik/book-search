package component

import data.*
import hoc.withDisplayName
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import react.functionalComponent
import react.router.dom.navLink
import kotlin.reflect.KFunction2

interface AnyTableProps<T> : RProps {
    var objs: Array<T>
    var titles: Array<String>
}

fun <T> fAnyTable(
    name: String,
    path: String,
    rItem: RBuilder.(Array<T>) -> ReactElement
) =
    functionalComponent<AnyTableProps<T>> {props ->
        h2 { +name }
        table ("any-table") {
            tbody {
                tr {
                    console.log(props.objs)
                    props.titles.mapIndexed { _, title ->
                        th {
                            console.log(title)
                            +title
                        }
                    }
                }
                rItem(props.objs)

            }
        }

    }

fun <T> RBuilder.anyTable(
    rItem: RBuilder.(Array<T>) -> ReactElement,
    anys: Array<T>,
    titles: Array<String>,
    name: String,
    path: String
) = child(
    withDisplayName(name, fAnyTable<T>(name, path, rItem))
){
    attrs.objs = anys
    attrs.titles = titles
}
