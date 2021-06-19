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

//----------------------------------------------------Task2------------------------------------------------------------------------
//Sort the array by category and name in ascending order. So the output should have the products with category Chocolate followed by products with category Soft Drink. Products with in the same category are sorted by name.

productMaster.sort(sortNameInAscOrder)

function sortNameInAscOrder(product1, product2) {
    let name1 = product1.name
    let name2 = product2.name
    return name1.localeCompare(name2)  
}

productMaster.sort(sortCtgryInAscOrder)


function sortCtgryInAscOrder(product1, product2) {
    let ctgry1 = product1.name
    let ctgry2 = product2.name
    return  ctgry1.localeCompare(ctgry2)  
}

console.log(productMaster)



//-------------------------------------------------------Other Approach----------------------------------------------------
// productMaster.sort(sortInAscOrder)


// function sortInAscOrder(product1, product2) {
//     let ctgry1 = product1.name
//     let ctgry2 = product2.name

//     let name1 = product1.name
//     let name2 = product2.name
//     return  ctgry1&&name1.localeCompare(ctgry2&&name2)  
// }


