const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

//fake data
let recycle  = [
{name: 'Cardboard', 
Description: 'shoe boxes, cereal boxes', 
Recyclable: 'true', 
Quantity: '2',  
pricePerUnit: '2',
_id: uuidv4(),
}, //adding Id

{
name: 'Mixed Paper', 
Description: 'Newspaper, Books, Magazines', 
Recyclable: 'true', 
Quantity: '10',  
pricePerUnit: '5',
_id: uuidv4() 

}, //adding Id

{
name: 'Metal', 
Description: 'Pans, Cans, toy, tool, car part ', 
Recyclable: 'true', 
Quantity: '10',  
pricePerUnit: '10',
_id: uuidv4() 

}, 

{
name: 'Glass', 
Description: 'Drinking glass, window glass', 
Recyclable: 'false', 
Quantity: '0',  
pricePerUnit: '0',
_id: uuidv4() 
},

{
name: 'Plastic', 
Description: 'Plastic bags, plastic straws', 
Recyclable: 'false', 
Quantity: '0',  
pricePerUnit: '0',
_id: uuidv4() 

},

{
name: 'Cartons', 
Description: 'Milk, juice, soy milk, broth, wine', 
Recyclable: 'true', 
Quantity: '15',  
pricePerUnit: '12',
_id: uuidv4() 

},

];


// routes
recycledItemsRouter
.get('/',(req, res) => {
    res.send(recycle)
})

.get('/:recycleId',(req, res) => {
    const recycleId = req.params.recycleId;
    const singleItem = recycle.find(item => item._id === recycleId);

    res.send(singleItem)
})

.get('/search/id', (req, res) => {
   const recycleId = req.query._id
   const filteredItems = recycle.filter(item => item.id === recycleId)

   res.send(filteredItems)
})

.post('/', (req, res) => {
    const addRecycledItems = req.body; 
    addRecycledItems._id = uuidv4();
    recycle.push(addRecycledItems);

    console.log(recycle)
    res.send(`Successfully added ${addRecycledItems.name} to the database`);
})

.delete('/:recycleId', (req, res) => {
    const recycleId = req.params.recycleId;
    const recycleIndex = recycle.findIndex(item => item._id === recycleId);

    recycle.splice(recycleIndex, 1);

    res.send('Resource Successfully Deleted!')
}) // Delete one


.put('/:recycleId', (req, res) => {
    const recycleId = req.params.recycleId;
    const recycleIndex = recycle.findIndex(item => item._id === recycleId);
    const updatedRecyclabeList = Object.assign(recycle[recycleIndex], req.body);

    res.send('A new Recyclable item was added successfully to your list!');
})



module.exports = recycledItemsRouter;