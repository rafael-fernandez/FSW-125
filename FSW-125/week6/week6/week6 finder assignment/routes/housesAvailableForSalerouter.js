const express = require ('express');
const housesAvailableForSaleRouter = express.Router();
const {v4: uuid} = require('uuid');

let available = [
    {
        year: 2006,
        story:"One",
        mls: " 860172",
        subdivision: "Lomas Del Sol",
        price: 325_000,
        _id: uuid()
    },
    {
         year: 1970,
        story:"One",
        mls: " 860155",
        subdivision: "Thomas Manor",
        price: 159000,
        _id: uuid()
    },
    {
       year: 2022,
        story:"One",
        mls: " 860167",
        subdivision: "Tierra Del Este",
        price: 538000,
        _id: uuid()
    },
    {
       year: 2022,
        story:"two",
        mls: " 860168",
        subdivision: "Tierra Del Este",
        price: 539400,
        _id: uuid()  
    },
    {
       year: 1960,
        story:"one",
        mls: " 859396",
        subdivision: "Dolphin Terrace",
        price: 185000,
        _id: uuid() 
    },
    {
       year: 1970,
        story:"one",
        mls: " 860154",
        subdivision: "Northridge",
        price: 189000,
        _id: uuid() 
    },
    {
       year: 2005,
        story:"two",
        mls: " 859887",
        subdivision: "Tierra Del Este",
        price: 194500,
        _id: uuid() 
    },

     {
       year: 1949,
        story:"two",
        mls: " 859028",
        subdivision: "Bassett",
        price: 194588.00,
        _id: uuid() 
    },  
    

]

housesAvailableForSaleRouter
    .get ('/', (req, res) => {
        res.send(available);
    })

    .get('/:availableID', (req, res) => {
        const houseID = req.params.availableID;
        const foundHouse = available.filter(e => e._id == houseID);
        res.send(foundHouse);
    })

    .get('/search/year', (req, res) => {
        const userSearch = req.query.year;
        const filtered = available.filter(e =>e.year == userSearch);
        res.send(filtered);
    })

    .get('/search/story', (req, res) => {
        const userSearch = req.query.story;
        const filtered = available.filter(e =>e.story.toLowerCase() == userSearch.toLowerCase());
        res.send(filtered);
    })



    .post('/', (req, res) => {
        const newHouse = req.body;
        newHouse._id = uuid();
        available.push(newHouse);
        res.send(`${newHouse.year} ${newHouse.story} ${newHouse.price} has been added successfully`);
    })

    .put('/:availableID', (req, res) => {
        const itemID = req.params.availableID;
        const houseIndex = available.findIndex(e => e._id == itemID);
        Object.assign (available[houseIndex], req.body);
        res.send(`${available[houseIndex].year} ${available[houseIndex].story} ${available[houseIndex].price} has been updated successfully`)
    })

    .delete('/:availableID', (req, res)=> {
        const itemID = req.params.availableID;
        const houseIndex = available.findIndex(e => e._id == itemID);
        available.splice(houseIndex, 1);
        res.send(`The house${itemID} has been removed successfully`);
    })

module.exports = housesAvailableForSaleRouter