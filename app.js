const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
var moment = require('moment')


// Livereload---reload the page automatically when you make changes to the files
const path = require('path')
const livreload = require('livereload')
const livereloadServer = livreload.createServer()
livereloadServer.watch(path.join(__dirname, 'public'))
const connectLivereload = require('connect-livereload')
app.use(connectLivereload())
livereloadServer.server.once('connection', () => {
    setTimeout(() => {
        livereloadServer.refresh('/')
    }, 100)
})

//--------------------------





// MongoDB connection
mongoose.connect("mongodb+srv://advxm:yzxziGCWZoUEYZ9H@cluster0.06b0d.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        app.listen(port, () => {
            console.log(`http://localhost:${port}`);
        });
    }).catch((err) => {
        console.log(err);
    });

// --------Import the Customer model
const Customer = require('./models/customerSchema')




// Get Requests section
//------------show the data from the database inn the index page
app.get('/', (req, res) => {
    Customer.find()
        .then((result) => {
            console.log("====================================");
            console.log(result);
            res.render('index', { arr: result, moment: moment })

        })
        .catch((err) => {
            console.log(err);
        })




})


app.get('/user/add.html', (req, res) => {
    res.render('user/add')
})


app.get('/user/:id', (req, res) => {
    Customer.findById(req.params.id)
    .then((result) => {
        res.render('user/view', {one:result,moment:moment})
        
    })
    .catch((err) => {
        console.log(err);
    })
})



//post requests
//------------send data to the database
app.post('/user/add.html', (req, res) => {
    console.log(req.body);
    Customer.create(req.body).then(() => { res.redirect("/") })
        .catch((err) => {
            console.log(err);
        })
})




//put requests
//-----------update the data
