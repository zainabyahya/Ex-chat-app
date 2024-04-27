const express = require('express');
const app = express();
var cors = require('cors');
const port = 8000;
let chatList = require('./data.js')

app.use(express.json());
app.use(cors());

app.get("/chats", (req, res) => {
    try {
        res.status(200).json(chatList);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/chats/:id", (req, res) => {
    try {
        const chatId = parseInt(req.params.id);
        if (!chatList.find((chat) => chat.id === Number(chatId))) {
            res.status(404).send("Chat not found!");
        }
        const foundChat = chatList.find(chat => chat.id === chatId);
        res.status(200).json(foundChat);
    } catch (error) {
        res.status(500).send(error);
    }
});

// search by text characters
app.get("/chats/search/:text", (req, res) => {
    const searchTerm = req.params.text;
    console.log("🚀 ~ app.get ~ searchTerm:", searchTerm)
    try {
        const foundChats = chatList.filter(chat => (chat.text.toLowerCase().includes(searchTerm.toLowerCase())))
        res.status(200).json(foundChats);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/chats", (req, res) => {
    try {
        const newChat = { ...req.body, id: (chatList.length + 1) }
        if (!newChat.username || !newChat.text) {
            res.status(404).send("Please provide all the needed information.");
        }
        chatList.push(newChat);
        res.json(chatList);

    } catch (error) {
        res.status(500).send(error);
    }

});

app.delete('/chats/:id', (req, res) => {
    const chatId = req.params.id;
    try {
        chatList = chatList.filter((chat) => chat.id !== Number(chatId));
        res.status(204).send(chatList);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/chats/:id', (req, res) => {
    const chatId = req.params.id;
    const updatedText = req.body.text;
    try {
        chatList = chatList.map(chat => chat.id === Number(chatId) ? { ...chat, text: updatedText } : chat);
        res.status(201).json(chatList);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('*', function (req, res) {
    res.status(404).send("Page does not exist. Try again!");
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});