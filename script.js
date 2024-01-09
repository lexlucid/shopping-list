window.onload = function() {
    initShoppingList()
}

function initShoppingList() {
    const form = document.getElementById(("item-form"))

    form.addEventListener("submit", (event) => {
        handleItemForm(event, form)
    })

    function handleItemForm(event, formRef) {
        if (event.preventDefault) {
            event.preventDefault()
        }

        addItemToShoppingList()
        formRef.reset()

        return false
    }
    function addItemToShoppingList() {
        const itemName = document.getElementById("item-name")
        const itemAmount = document.getElementById("item-amount")
        const id = getRandomInt(0, 1000000)

        const itemHtml = createListItemHtml(itemName.value, itemAmount.value, id)
        console.log(itemHtml)
        const itemListRef = document.getElementById("shopping-list")
        itemListRef.insertAdjacentHTML("afterend", itemHtml)

        setDeleteButtonEvent(id)
    }

    function setDeleteButtonEvent(id) {
        const deleteButton = document.getElementById("button" + id)
        deleteButton.addEventListener("click", ()=> {
            removeListItem(id)
        })
    }
    function createListItemHtml(itemName, itemAmount, id) {
        return ` <li id="item${id}">
                    ${itemName} - ${itemAmount}
                    <button id="button${id}" type="button">Delete Item</button>
                 </li>
        `
    }

    function removeListItem(id) {
        const listItem = document.getElementById("item" + id)
        listItem.parentNode.removeChild(listItem)
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.ceil(max)
        return Math.floor(Math.random() * (max - min)) + min
    }
}