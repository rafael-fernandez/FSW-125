const express = require('express');
const itemsIntakeRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let newItems = [
{
name: 'Cardboard', 
Description: 'shoe boxes, cereal boxes', 
Recyclable: 'true', 
Quantity: '2',  
pricePerUnit: '2',
_id: uuidv4(),
}, 

{
name: 'Mixed Paper', 
Description: 'Newspaper, Books, Magazines', 
Recyclable: 'true', 
Quantity: '10',  
pricePerUnit: '5',
_id: uuidv4() 

}, 

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
itemsIntakeRouter
.get('/',(req, res) => {
    res.send(newItems)
})

.post('/', (req, res) => {
    const newItem = req.body; 
    newItem._id = uuidv4()
    newItems.push(newItem);

    console.log(newItems)
    res.send(`Successfully added ${newItem.name} to the database`);
});



module.exports = itemsIntakeRouter;


