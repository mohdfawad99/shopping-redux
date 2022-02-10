const initialState = {
    items: [
        { itemName: 'item1', quantity: 1, isCompleted: false },
        { itemName: 'item2', quantity: 3, isCompleted: false },
        { itemName: 'item3', quantity: 2, isCompleted: true }
    ]
}

const shoppingListReducer = (state = initialState, action) => {
    let newItems
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: state.items.concat({
                    itemName: action.itemName,
                    quantity: 1,
                    isCompleted: false
                })
            }
        case "TOGGLE_COMPLETE":
            newItems = state.items.map((item, index) => action.itemIndex === index ? { ...item, isCompleted: !item.isCompleted } : item)
            return {
                ...state,
                items: newItems
            }
        case "INCREMENT_QTY":
            newItems = state.items.map((item, index) => action.itemIndex === index ? { ...item, quantity: item.quantity + 1 } : item)
            return {
                ...state,
                items: newItems
            }

        case "DECREMENT_QTY":
            newItems = state.items.map((item, index) => action.itemIndex === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
            return {
                ...state,
                items: newItems
            }
        default:
            return state
    }
}

export default shoppingListReducer;