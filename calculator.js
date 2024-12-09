// Global Event Dates
const eventDates = {
    fallOfRome: new Date('476/01/01'),
    fallOfConstantinople: new Date('1453/05/29'),
    startOfWWI: new Date('1914/07/28'),
    endOfWWII: new Date('1945/09/02'),
    holyRomanEmpire: new Date('800/12/25'),
    islamicGoldenAge: new Date('750/01/01')
};

// Calculate time passed in years and minutes from today
function calculateTimePassed() {
    const eventSelect = document.getElementById('eventSelect').value;
    const selectedDate = eventDates[eventSelect];

    if (!selectedDate) {
        document.getElementById('result').innerHTML = 'Please select a valid event.';
        return;
    }

    const currentDate = new Date();
    const timeDifference = currentDate - selectedDate;

    if (isNaN(timeDifference)) {
        document.getElementById('result').innerHTML = 'Invalid date difference.';
        return;
    }

    const yearsPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
    const minutesPassed = Math.floor(timeDifference / (1000 * 60));

    document.getElementById('result').innerHTML = `
        <p>Years passed since event: ${yearsPassed}</p>
        <p>Minutes passed since event: ${minutesPassed}</p>
    `;
}

// Calculate time passed in years and minutes from a custom date
function calculateFromCustomDate() {
    const eventSelect = document.getElementById('eventSelect').value;
    const selectedDate = eventDates[eventSelect];
    const customDate = new Date(document.getElementById('customDate').value);

    if (!selectedDate || isNaN(customDate)) {
        document.getElementById('result').innerHTML = 'Please select a valid event and enter a valid date.';
        return;
    }

    const timeDifference = customDate - selectedDate;

    if (isNaN(timeDifference)) {
        document.getElementById('result').innerHTML = 'Invalid date difference.';
        return;
    }

    const yearsPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
    const minutesPassed = Math.floor(timeDifference / (1000 * 60));

    document.getElementById('result').innerHTML = `
        <p>Years passed since event: ${yearsPassed}</p>
        <p>Minutes passed since event: ${minutesPassed}</p>
    `;
}
