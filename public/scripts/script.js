const refreshButton = document.querySelector('button');

refreshButton.addEventListener('click', () => {
    console.log('button was clicked');
    location.reload();
    
    // fetch('/clicked', {method: 'POST'})
    //     .then((response) => {
    //         if(response.ok) {
    //             console.log('Click was recorded');
    //             return;
    //         }
    //         throw new Error('Request failed.');
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
});