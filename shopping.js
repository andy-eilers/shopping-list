const items = [
    {
        id: 1,
        name: "Milk",
        price: 3.50
    },

    {
        id: 2,
        name: "Eggs",   
        price: 2.75
    },

    {
        id: 3,
        name: "Pizza Rolls",
        price: 4.99
    },
    
    {
        id: 4,
        name: "Steak",
        price: 19.37
    },

    {
        id: 5,
        name: "Kiwi",
        price: 4.14
    },

    {
        id: 6,
        name: "Buns",
        price: 5.15
    },

    {
       id: 7,
       name: "Condiments",
       price: 3.98
    }
    
]

const addToShoppingList = (item) => {
    const lastIndex = items.length - 1
    const currentLastItem = items[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId +1
    const dateCreated = new Date()

    item.id = idForNewItem
    item.date = dateCreated
    items.push(item)

}

const candy = {
    name: "Milky Way",
    price: 4.01
}



addToShoppingList(candy)

console.log(items)