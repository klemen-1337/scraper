const express = require('express');
const Sequelize = require('sequelize');
const { Op } = require("sequelize");

const PORT = 5000;
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

const sequelize = new Sequelize('postgres://postgres:root@postgres:5432/postgres');

const Apartments = sequelize.define('apartments', {
    id:{
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title:{
        field: 'title',
        type: Sequelize.STRING,
    },
    price:{
        field: 'price',
        type: Sequelize.STRING,
    },
    loc:{
        field: 'loc',
        type: Sequelize.STRING,
    },
    imageurl:{
        field: 'imageurl',
        type: Sequelize.STRING,
    }
    },{
    timestamps: false
});

app.get('/apartments', (req, res) => {
    if(req.query.page){
        Apartments.findAll({
            where: {
                id: {
                    [Op.lt]: req.query.page * 21,
                    [Op.gt]: (req.query.page-1) * 21
                }
            }
        }).then((apartments) =>{
            res.json(apartments);
        })
    }else{
        res.send('Not a valid request');
    }
});

app.listen(PORT, () => console.log('server listening on port ' + PORT));