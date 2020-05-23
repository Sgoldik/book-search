package redux

import data.*

class AddAuthor(val author: Author): RAction
class ChangeAuthor(val id: Int, val newAuthor: Author): RAction
class RemoveAuthor(val id: Int) : RAction
class AddBook(val book: Book): RAction
class ChangeBook(val id: Int, val newBook: Book): RAction
class RemoveBook(val id: Int): RAction

class ChangeFav(val id: Int): RAction

class AddReview(val review: Review): RAction

class RemoveReview(val id: Int): RAction