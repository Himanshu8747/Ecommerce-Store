import Coffee from './Assets/coffee.png'
import Pants from './Assets/pants.jpg'
import Sunglasses from './Assets/sunglasses.png'
import Tshiirt from './Assets/tshirt.avif'
import Joggers from './Assets/joggers.jpg'
import Keyboard from './Assets/keyboard.png'
import GamingChair from './Assets/gaming chair.png'
import Graphicard from './Assets/graphic card.png'
import Iphone from './Assets/iphone-14.png'
import Headphones from './Assets/Headphones.png'
import WinterJacket from './Assets/winter jacket.png'
import Fossil from './Assets/FossilWatch.png'
import Noize from './Assets/NoiseWatch.jpg'
import Dekstop from './Assets/Dekstop.jpg'
import HP from './Assets/HpLaptop.jpg'


const products =[
    {
        id:"price_1NQ6q1SI3aqEchJLlTpOWOdA",
        name:"Coffee",
        price:49,
        image:Coffee
    },
    {
        id:"price_1NQ6sFSI3aqEchJLjYf51Dto",
        name:"Pants",
        price:949,
        image:Pants
    },
    {
        id:"price_1NQ6rTSI3aqEchJLHMcofFdq",
        name:"Sunglasses",
        price:499,
        image:Sunglasses
    },
    {
        id:"price_1NQ7ehSI3aqEchJLugJZWq1q",
        name:"Tshirt",
        price:499,
        image:Tshiirt
    },
    {
        id:"price_1NQ7e0SI3aqEchJLKYC98FKJ",
        name:"Joggers",
        price:1499,
        image:Joggers
    },
    {
        id:"price_1NQ7fCSI3aqEchJLiWifQwhF",
        name:"Keyboard",
        price:899,
        image:Keyboard
    },
    {
        id:"price_1NQ7fjSI3aqEchJLud2UXm9D",
        name:"HeadPhones",
        price:799,
        image:Headphones
    },
    {
        id:"price_1NQ7gGSI3aqEchJLECtSiSDU",
        name:"Winter Jacket",
        price:1299,
        image:WinterJacket
    },
    {
        id:"price_1NQ7gpSI3aqEchJL4mAdpMug",
        name:"Fossil Watch",
        price:14999,
        image:Fossil
    },
    {
        id:"price_1NQ7iqSI3aqEchJLPH1VOOSV",
        name:"Noise Smart Watch",
        price:4999,
        image:Noize
    },
    {
        id:"price_1NQ7hISI3aqEchJLfOtUE3kA",
        name:"Zebronics 24 Inch Dekstop",
        price:29999,
        image:Dekstop
    },
    {
        id:"price_1NQ7hsSI3aqEchJLmRxKiigq",
        name:"IPhone 14",
        price:149999,
        image:Iphone
    },
    {
        id:"price_1NQ7jOSI3aqEchJLmqS5p8z5",
        name:"HP Laptop",
        price:69999,
        image:HP
    },
    {
        id:"price_1NQ7jsSI3aqEchJLAJ7D1Wby",
        name:"Nvidia Graphic Card",
        price:9500,
        image:Graphicard
    },
    {
        id:"price_1NQ7kKSI3aqEchJLOUiNFFKW",
        name:"Gaming Chair",
        price:8000,
        image:GamingChair
    }
]

const getProductData=(id)=>{
    let productData = products.find(product => product.id === id);
    if(productData===undefined){
        alert("Product not found for-"+id);
        return undefined;
    }
    return productData;
}

export {products,getProductData};
