const addItem = (itemName) => {
    return {
        type: "ADD_ITEM",
        itemName
    }
}

const toggleComplete = (itemIndex) => {
    return {
        type: "TOGGLE_COMPLETE",
        itemIndex
    }
}

const incrementQty = (itemIndex) => {
    return {
        type: "INCREMENT_QTY",
        itemIndex
    }
}

const decrementQty = (itemIndex) => {
    return {
        type: "DECREMENT_QTY",
        itemIndex
    }
}

export {addItem, toggleComplete, incrementQty, decrementQty};