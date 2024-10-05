document.getElementById('form').addEventListener('submit',

    async function submit(event){
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value;
        ///add more validation !!!!! THIS IS TEMPORARY, MONKEY

        await fetch('push.php', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content, author})
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('status').style.display = "UPLOADED SUCCESSFULLY";
                document.getElementById('form').reset();
            }
            else {
                document.getElementById('status').style.display = "UPLOAD ERROR";
                alert('Error: ' + data.message);
            }
        }
        )
        .catch(error => console.error('Error: ', error));
    }
);