const Books = require("../model/Books");

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Books.find();
    return res.status(200).json(allBooks);
  } catch (error) {
    return res.status(500).json(error.message );
  }
};

exports.getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.findById(id);
    return res.status(200).json(book);

    // await Books.findById();
    // res.status(200).json(Books);
  } catch (error) {
    return res.status(500).json(error.message );
  }
};

exports.createBook = async (req, res) => {
  //  const{title, author,price,image}=Bookdetails;
  try {
    const newBook = await Books.create(req.body);
    return res.status(201).json(newBook);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.findById(id);
    await book.deleteOne();
    return res.status(204).json({ message: "deleted" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    // const { title } = req.body;
    const book = await Books.findById(id);
    await book.updateOne(req.body);

    // await book.updateOne(req.body);

    return res.status(200).json({ message: "Updated" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
