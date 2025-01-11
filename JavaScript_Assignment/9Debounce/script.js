// Debounce function
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Function to update the span with the input value
function updateDebouncedResult() {
    const input = document.getElementById('debounceInput').value;
    const result = document.getElementById('debouncedResult');
    result.innerHTML = 'You Typed  ::'+input;
}

// Add event listener to the input field with a debounced version of the update function
const inputField = document.getElementById('debounceInput');
const debouncedUpdate = debounce(updateDebouncedResult, 300); // 300ms delay
inputField.addEventListener('input', debouncedUpdate);