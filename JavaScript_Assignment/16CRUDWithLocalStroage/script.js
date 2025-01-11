// Retrieve items from localStorage or initialize an empty array
let items = JSON.parse(localStorage.getItem('items')) || [];

// Function to display items
function displayItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';
    items.forEach((item, index) => {
        itemList.innerHTML += `
          <li class="mb-2">
            ${item} 
            <button class="btn btn-warning btn-sm" onclick="editItem(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteItem(${index})">Delete</button>
          </li>
        `;
    });
}

// Function to add a new item
function addItem() {
    const itemInput = document.getElementById('item-input');
    const newItem = itemInput.value.trim();
    if (newItem) {
        items.push(newItem);
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
        itemInput.value = '';
    } else {
        alert('Please enter an item.');
    }
}

// Function to edit an existing item
function editItem(index) {
    const newItem = prompt('Edit item:', items[index]);
    if (newItem !== null && newItem.trim() !== '') {
        items[index] = newItem.trim();
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
    }
}

// Function to delete an item
function deleteItem(index) {
    if (confirm('Are you sure you want to delete this item?')) {
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
    }
}

// Display items on page load
displayItems();