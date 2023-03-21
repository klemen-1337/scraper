const express = require('express');
const Sequelize = require('sequelize');
const { Op } = require("sequelize");

const PORT = 5000;
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


const sequelize = new Sequelize('postgres://postgres:root@127.0.0.1:5432/postgres');

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

app.get('/', (req, res) => {
    Apartments.findAll({
        where: {
            id: {
                [Op.lt]: 10
            }
        }
    }).then((apartments) =>{
        res.json(apartments);
    })
});

app.listen(PORT, () => console.log('server listening on port ' + PORT));