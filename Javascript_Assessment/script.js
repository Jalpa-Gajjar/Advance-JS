document.getElementById('bookingChoice').addEventListener('change', function() {
    const bookingOptionsDiv = document.getElementById('bookingOptions');
    bookingOptionsDiv.innerHTML = ''; // Clear previous options

    const selectedBooking = this.value;

    // Create date input field
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'bookingDate');
    dateLabel.textContent = 'Date:';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'bookingDate');
    dateInput.setAttribute('name', 'bookingDate');

    if (selectedBooking === 'fullDay') 
    {
        // Only date is shown for Full Day booking
        bookingOptionsDiv.appendChild(dateLabel);
        bookingOptionsDiv.appendChild(dateInput);
    } 
    else if (selectedBooking === 'halfDay') 
    {
        // Date and Slot options for Half Day booking
        bookingOptionsDiv.appendChild(dateLabel);
        bookingOptionsDiv.appendChild(dateInput);

        // Create slot label and select
        const slotLabel = document.createElement('label');
        slotLabel.setAttribute('for', 'slot');
        slotLabel.textContent = 'Slot:';
        const slotSelect = document.createElement('select');
        slotSelect.setAttribute('id', 'slot');
        slotSelect.setAttribute('name', 'slot');

        // Add slot options
        const breakfastOption = document.createElement('option');
        breakfastOption.setAttribute('value', 'breakfast');
        breakfastOption.textContent = 'Breakfast';
        slotSelect.appendChild(breakfastOption);

        const lunchOption = document.createElement('option');
        lunchOption.setAttribute('value', 'lunch');
        lunchOption.textContent = 'Lunch';
        slotSelect.appendChild(lunchOption);

        const dinnerOption = document.createElement('option');
        dinnerOption.setAttribute('value', 'dinner');
        dinnerOption.textContent = 'Dinner';
        slotSelect.appendChild(dinnerOption);

        // Append slot select to form
        bookingOptionsDiv.appendChild(slotLabel);
        bookingOptionsDiv.appendChild(slotSelect);
    } 
    else if (selectedBooking === 'hourly') 
    {
        // Date and Time options for Hourly booking
        bookingOptionsDiv.appendChild(dateLabel);
        bookingOptionsDiv.appendChild(dateInput);

        // Create time input field
        const timeLabel = document.createElement('label');
        timeLabel.setAttribute('for', 'bookingTime');
        timeLabel.textContent = 'Time:';
        const timeInput = document.createElement('input');
        timeInput.setAttribute('type', 'time');
        timeInput.setAttribute('id', 'bookingTime');
        timeInput.setAttribute('name', 'bookingTime');

        // Append time input to form
        bookingOptionsDiv.appendChild(timeLabel);
        bookingOptionsDiv.appendChild(timeInput);
    }
});