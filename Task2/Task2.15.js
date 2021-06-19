let productMaster = [
    { id: 'A441', name: 'Pepsi', category: 'Soft Drink', price: 15, quantity: 2 },
    { id: 'B234', name: 'Coke', category: 'Soft Drink', price: 10, quantity: 8 },
    { id: 'A617', name: 'Mirinda', category: 'Soft Drink', price: 20, quantity: 20 },
    { id: 'B003', name: 'Sprite', category: 'Soft Drink', price: 16, quantity: 5 },
    { id: 'B225', name: 'Minute Maid', category: 'Soft Drink', price: 25, quantity: 12 },
    { id: 'A742', name: '5Star', category: 'Chocloate', price: 10, quantity: 3 },
    { id: 'B388', name: 'Appy', category: 'Soft Drink', price: 35, quantity: 9 },
    { id: 'A899', name: 'Gems', category: 'Chocloate', price: 12, quantity: 11 },
    { id: 'B635', name: 'KitKat', category: 'Chocloate', price: 15, quantity: 7 },
    { id: 'B408', name: 'Perk', category: 'Chocloate', price: 8, quantity: 15 },
    { id: 'A354', name: 'Dairy Milk', category: 'Chocloate', price: 30, quantity: 4 }
]

//-----------------------------------------------Task 2-------------------------------------------------------------
/*
A customer order has arrived. The customer order is an array of JSON having the id and
orderQuantity. A sample JSON is
[{id:'A441', orderQuantity: 2},
{id:'A354', orderQuantity: 5},
{id:'B003', orderQuantity: 9}]
Define a function that takes a customer order as parameter and creates a new array which has
the id, orderQuantity, name and price for each entry in the order. Print the new array on the
console. Use map and find. Do not use for loops.
So, for the above sample, the new array should be
[{id:'A441', orderQuantity: 2, name:'Pepsi', price:15},
{id:'A354', orderQuantity: 5, name:'Dairy Milk', price:30},
{id:'B003', orderQuantity: 9, name:'Sprite', price:16}]
*/

let customerOrder = [
    { id: 'A441', orderQuantity: 2 },
    { id: 'A354', orderQuantity: 5 },
    { id: 'B003', orderQuantity: 9 }
]


function newArr(customerOrder) {

    let customerOrderDtls = customerOrder.map((order) => {

        let cid = order.id
        let findProd = productMaster.find((product) => {
            return product.id === cid
        })

        let { id, name, price, quantity } = findProd

        let custOrderDetails = {}
        custOrderDetails.id = id
        custOrderDetails.orderQuantity = quantity
        custOrderDetails.name = name
        custOrderDetails.price = price

        return custOrderDetails
    })
    
    console.log(customerOrderDtls)
}

newArr(customerOrder)


