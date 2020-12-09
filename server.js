// モジュール読み込み
var express = require("express");

// ExpressのRouter 作成
var router = express.Router();

// サーバ作成
var app = express();

// ミドルウェア router
app.use("/", router);

// ルーティング
router.get("/", (req, res) => {
    res.send("Hello Express Router!!");
});

router.get("/profile", (req, res) => {
    res.send("Tokyo Taro");
});

// サーバ待機
app.listen(3000);

console.log("Listen: http://localhost:3000");