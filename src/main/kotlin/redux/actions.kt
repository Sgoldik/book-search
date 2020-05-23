package redux

import data.*

class AddBook(val book: Book): RAction

class ChangeFav(val id: Int): RAction

class AddReview(val review: Review): RAction