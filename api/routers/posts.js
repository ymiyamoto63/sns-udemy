const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

// つぶやき投稿用API
router.post("/post", async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "投稿内容がありません。" });
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        content,
        authorId: 1,
      },
    });

    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "サーバーエラーです。" });
  }
});

// 最新つぶやき取得用API
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await prisma.user.findUnique({ where: { email } });

//   if (!user) {
//     return res.status(401).json({ error: "そのユーザーは存在しません。" });
//   }

//   const isPasswordValid = await bcrypt.compare(password, user.password);

//   if (!isPasswordValid) {
//     return res.status(401).json({ error: "そのパスワードは間違っています。" });
//   }

//   const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
//     expiresIn: "1d",
//   });

//   return res.json({ token });
// });

module.exports = router;
