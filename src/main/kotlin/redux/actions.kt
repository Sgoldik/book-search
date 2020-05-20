package redux

class AddAuthor(val name: String, val surname: String): RAction
class EditAuthor(val index: Int, val firstname: String, val surname: String): RAction
class DeleteAuthor(val index: Int) : RAction
class AddBook(val name: String): RAction
class EditBook(val index: Int, val name: String): RAction
class DeleteBook(val index: Int): RAction