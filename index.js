const cors = require('cors');
const res = require('express/lib/response');
const express = require(('express'))
const app = express();
const port = process.env.PORT || 5000;


const categories = require('./data/categories');
const news = require('./data/news')


app.use(cors())

app.get('/', (req, res) => {
    res.send('NEW API 666')
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
})


app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(req.params.id)
    const selectedNews = news.find(n => n._id === id);
    // console.log(selectedNews)
    res.send(selectedNews);
})


app.get('/category/:id', (req, res) => {
    const id = req.params.id;

    if (id === '08') {
        res.send(news)
    } else {
        const categoryNews = news.filter(n => n.category_id === id);
        res.send(categoryNews);
    }

})



app.listen(port, () => {
    return (
        console.log('Dragon News server port', port)
    )
});



module.exports = app;
