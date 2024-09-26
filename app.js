document.getElementById('addBookBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const type = document.querySelector('input[name="type"]:checked')?.value;

    if (name && author && type) {
        const table = document.getElementById('booksTable').getElementsByTagName('tbody')[0];

        const newRow = table.insertRow();
        const nameCell = newRow.insertCell(0);
        const authorCell = newRow.insertCell(1);
        const typeCell = newRow.insertCell(2);

        nameCell.textContent = name;
        authorCell.textContent = author;
        typeCell.textContent = type;

        // Clear input fields after adding
        document.getElementById('bookForm').reset();
    } else {
        alert('Please fill all fields');
    }
});
