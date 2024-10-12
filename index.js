import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_link = "https://v2.jokeapi.dev/joke";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs", { joke: "Select any options..."});
});

app.get("/programming-jokes", async (req,res) => {
    try{
        const result = await axios.get(API_link+"/Programming");
        const type = result.data.type;
        if(type=="single"){
            res.render("index.ejs", { joke: result.data.joke});
        }
        if(type=="twopart"){
            const setup = result.data.setup;
            const delivery = result.data.delivery;
            const final = setup + delivery;
            res.render("index.ejs", { joke: final});
        }
    } catch (error) {
        console.log(error.response.data);
        res.status(404);
    }
})

app.get("/any-jokes", async (req,res) => {
    try{
        const result = await axios.get(API_link+"/Any");
        const type = result.data.type;
        if(type=="single"){
            res.render("index.ejs", { joke: result.data.joke});
        }
        if(type=="twopart"){
            const setup = result.data.setup;
            const delivery = result.data.delivery;
            const final = setup + delivery;
            res.render("index.ejs", { joke: final});
        }
    } catch (error) {
        console.log(error.response.data);
        res.status(404);
    }
})

app.get("/christmas-jokes", async (req,res) => {
    try{
        const result = await axios.get(API_link+"/Christmas");
        const type = result.data.type;
        if(type=="single"){
            res.render("index.ejs", { joke: result.data.joke});
        }
        if(type=="twopart"){
            const setup = result.data.setup;
            const delivery = result.data.delivery;
            const final = setup + delivery;
            res.render("index.ejs", { joke: final});
        }
    } catch (error) {
        console.log(error.response.data);
        res.status(404);
    }
})

app.get("/spooky-jokes", async (req,res) => {
    try{
        const result = await axios.get(API_link+"/Spooky");
        const type = result.data.type;
        if(type=="single"){
            res.render("index.ejs", { joke: result.data.joke});
        }
        if(type=="twopart"){
            const setup = result.data.setup;
            const delivery = result.data.delivery;
            const final = setup + delivery;
            res.render("index.ejs", { joke: final});
        }
    } catch (error) {
        console.log(error.response.data);
        res.status(404);
    }
})
 
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});

