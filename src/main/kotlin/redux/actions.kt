package redux

import data.*

class ChangeFav(val id: Int): RAction

class AddReview(val review: Review): RAction