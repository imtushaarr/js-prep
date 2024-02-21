// forEach.reduce

const array1 = [1,2,3,4]

const myTotal = array1.reduce( (acc, curval) => {
    // console.log(`acc : ${acc} and curval: ${curval}`);
    return acc + curval
}, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemname: 'js',
        price: 2999
    },
    {
        itemname: 'py',
        price: 5000
    },
    {
        itemname: 'md',
        price: 6999
    },
    {
        itemname: 'ds',
        price: 1000
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(priceToPay);