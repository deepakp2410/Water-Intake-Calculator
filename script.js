document.getElementById('water-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user's inputs
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);

    // Calculate water intake using a simple formula
    let waterIntake = 0;

    if (age < 30) {
        waterIntake = weight * 67;
    } else if (age >= 30 && age <= 55) {
        waterIntake = weight * 57;
    } else {
        waterIntake = weight * 47;
    }

    waterIntake = waterIntake / 1000; // Convert to liters

    // Display the result
    document.getElementById('water-intake').textContent = waterIntake.toFixed(2) + ' liters';
});
