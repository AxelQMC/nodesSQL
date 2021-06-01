const express = require('express');
const router = express.Router();

const pool = require("../database");

router.get("/add",(req,res) => {
    res.render("links/add");
});

router.post("/add",async (req,res)=> {
    const {title, url, descripcion} = req.body;
    const newLink = {
        title,
        url,
        descripcion
    };
    await pool.query("INSERT INTO links set ?", [newLink], )
    res.redirect("/links");
});

router.get("/", async (req,res) => {
    const links = await pool.query("SELECT * FROM links");
    console.log(links)
    res.render("links/list", { links })
});

router.get("/delete/:id", async (req,res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM links WHERE id = ?",[id]);
    res.redirect("/links")

});

router.get("/edit/:id", async (req,res) =>{
    const {id} = req.params;
    const links = await pool.query("SELECT * FROM links WHERE id = ?",[id]);
    res.render("links/edit", {link: links[0]});
});

router.post("/edit/:id", async (req, res) =>{
    const { id } = req.params;
    const { title,descripcion,url } = req.body;
    const newLink = {
        title,
        descripcion,
        url
    }
    await pool.query("UPDATE links set ? WHERE id = ?", [newLink, id]);
    res.redirect("/links")
});

module.exports = router;

