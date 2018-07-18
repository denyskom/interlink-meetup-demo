const express = require('express');

const app = express();

app.get('/:name', function (req, res) {
    let name = req.params.name;
    res.json({
        massage:`Hello ${name}`
        }
    );
});

app.listen(3000, function () {
    console.log("server started, port 3000")
});
