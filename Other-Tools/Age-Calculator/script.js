// Calculate Age Function
function calculateAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');
    if (dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        const diffTime = Math.abs(today - birthDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        result.innerHTML = `Your age is ${years} years, ${months} months, and ${days} days.<br>
                            Or, ${years * 12 + months} months and ${days} days.<br>
                            Or, ${diffDays} days.`;
    } else {
        result.textContent = 'Please enter your date of birth.';
    }
}
