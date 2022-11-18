const squeakerSchema = require("../models/squeakers");
const chatSchema = require("../models/chats");
// const getChat = async(req, res) => {
//     await (await squeakerSchema.find());
//     console.log(squeakers);
//     res.render("chat",{squeakers:squeakers});
// };
const addSqeaker = (req, res) => {
    const squeaker = new squeakerSchema({
        name: req.body.name,
    });
    squeaker.save()
        .then(() => {
            console.log("Data Saved Successfully!");
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            res.redirect("/squeakersaddview");
        });
};
const addSqeakerView = (req, res) => {
    res.render("addSqueaker");
};
const getChat = async (req, res) => {
    let data = [];
    let squeakers = [];
    try {
      data = await squeakerSchema.find();
      console.log(data);
      data.forEach((book) => {
        squeakers.push({ name: book.name });
      });
    } catch (error) {
      console.log(error);
    } finally {
      res.render("chat", { squeakers: squeakers });
    }
  };

  const sendChat = async (req, res) => {
    const chat = new chatSchema({
      sender: req.body.sender,
        receiver: req.body.receiver,
      message: req.body.message,
    });
    chat.save()
      .then(() => {
        console.log("msg sent!");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        res.redirect("/chats");
      });

  }
  const getInboxof = async (req, res) => {
    res.render("inbox");

  }
  const getInboxofPOST = async (req, res) => {
    let data = [];
    let chats = [];
    try {
      data = await chatSchema.find({
        receiver: req.body.name,
      });
      console.log(data);
      data.forEach((chat) => {
        chats.push({ sender: chat.sender, message: chat.message, receiver: chat.receiver });
      });
    } catch (error) {
      console.log(error);
    } finally {
      res.render("inboxmsgs", { books: chats });
    }
  }



module.exports = { getChat, addSqeaker,addSqeakerView,sendChat,getInboxof,getInboxofPOST };
