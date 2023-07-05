// sk_test_51NQ6mPSI3aqEchJL2IqLDieC6R7djVRU0UJQIsCYkVZwDjo8gUqH7cAS2Yl0dWTSEtM72Bofu9uR6RBZWz6IXd9M007NfYwgUm


// coffee = price_1NQ6q1SI3aqEchJLlTpOWOdA
// sunglasses = price_1NQ6rTSI3aqEchJLHMcofFdq
// Pants = price_1NQ6sFSI3aqEchJLjYf51Dto

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51NQ6mPSI3aqEchJL2IqLDieC6R7djVRU0UJQIsCYkVZwDjo8gUqH7cAS2Yl0dWTSEtM72Bofu9uR6RBZWz6IXd9M007NfYwgUm');

const app =express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout",async(req,res)=>{
    /*
        req.body.items    
        [
            {
                id:1,
                quantity:2
            }
        ]
        
    stripe wants  
    [
        {
            price:1,
            quantity:2
        }
    ] 
    */
   console.log(req.body);
   const items = req.body.items;
   let lineItems =[];
   items.forEach((item)=>{
    lineItems.push({
        price:item.id,
        quantity:item.quantity
    });
   });
   const session = await stripe.checkout.sessions.create({
    line_items:lineItems,
    mode:'payment',
    success_url:"http://localhost:3000/success",
    cancel_url:"http://localhost:3000/cancel"
   });

   res.send(JSON.stringify({
    url:session.url
   }));
})

app.listen(4000,()=>console.log("Working on port 4000"));