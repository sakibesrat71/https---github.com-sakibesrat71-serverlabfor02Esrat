const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const bookController = require("./controllers/bookController");

router.get("/", homeController.getHome);
router.get("/book-list", bookController.getBookList);
router.get("/books", bookController.getBook);
router.post("/books", bookController.postBook);
router.get("/books-delete/:id", bookController.deleteBook);
router.get("/books-update/:id", bookController.getUpdateBook);
router.post("/books-update/:id", bookController.updateBook);
module.exports = router;
