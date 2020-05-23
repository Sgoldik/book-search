package components
import data.Review
import react.RBuilder
import react.RProps
import react.child
import react.dom.*
import react.functionalComponent

interface ReviewProps : RProps {
    var review: Review
}

val fReview =
    functionalComponent<ReviewProps> { props ->
        div ("review") {
            h3 {
                + props.review.author
            }
            p {
                + props.review.review
            }
        }
    }

fun RBuilder.review(
    review: Review
) = child(fReview) {
    attrs.review = review
}