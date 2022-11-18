const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const bookController = require("./controllers/bookController");
const chatController = require("./controllers/chatController");
const connectEnsureLogin = require('connect-ensure-login');
const passport = require('passport');
const checkAuthenticated = require('./routingmiddleare').checkAuthenticated;





router.get("/", homeController.getHome);
router.get("/register", homeController.getRegister);
router.post("/signup", homeController.postRegister);
router.get('/login', homeController.getLogin);
router.get('/logout', homeController.logOut);
router.get("/book-list",checkAuthenticated, bookController.getBookList);
router.get("/books",checkAuthenticated, bookController.getBook);
router.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), homeController.getDashboard);
router.post("/books",connectEnsureLogin.ensureLoggedIn(), bookController.postBook);
router.post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/login',
      successRedirect: '/dashboard',
    }),homeController.postLogin);
router.get("/chats",chatController.getChat);
router.get("/squeakersaddview",chatController.addSqeakerView);
router.post("/squeakersadd",chatController.addSqeaker);
router.post("/sendChat",chatController.sendChat);
router.get("/inbox",chatController.getInboxof);
router.post("/inbox",chatController.getInboxofPOST);


module.exports = router;
