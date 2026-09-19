// const { name } = require("ejs");

//

const ex = require("express");
const app = ex();
const dns = require("dns");

dns.setServers(["8.8.8.8"]);
const mongo = require("mongoose");
mongo.connect("mongodb+srv://hrand801_db_user:rand2004@cluster0.58ldhts.mongodb.net/?appName=Cluster0"

).then(()=>{
  console.log("truuuuuuuuuuuuuuuu")
}).catch((error)=>{
  console.log("falsSSSSSSSSSSe:",error)
})
const Article= require("./models/Article")
app.use(ex.json());
app.get('/hello',(req,res)=>{
    res.send("welcome in node .js")
})
app.get('/test',(req,res)=>{
    // res.send("welcome in testtt")
    // res.sendFile(__dirname + "/mon/test.ejs")
    res.render("test.ejs",{
      name:"randd"
    })
})
app.post('/rand',(req,res)=>{
  

  res.json({
    name:req.body.name,
    age: req.body.age
  })
})

app.post("/articles",async(req,res)=>{
  const newarticle= new Article();
  const artTitle= req.body.articleTitle;
  const artBody = req.body.articleBody;
  newarticle.title=artTitle
  newarticle.body=artBody;
  newarticle.number=86
 await newarticle.save()
 res.json(newarticle)
})
app.get("/articles",async(req,res)=>{
  const articles =await Article.find();
  res.json(articles);
})
app.get("/articles/:articleId",async(req,res)=>{
  const id = req.params.articleId
  const article =await Article.findById(id)
  res.json(article);
})

app.listen(3000,()=>{
    console.log("helloooooooooooooooo")
})