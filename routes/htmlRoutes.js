const path = require("path");

module.exports = app =>{
    app.get("/", (req, res) =>{
        res.sendFile(path.join(__dirname,"../public/view/userSetup.html"))
    });

    app.get("/home", (req, res) =>{
        res.sendFile(path.join(__dirname, "../public/view/mainPage.html"))
    });
}