

const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    button.dataset.likes = 0; 
    button.addEventListener('click', function() {
        
        const postItem = this.closest('.post-item'); 
        
        const likeCounter = postItem.querySelector('.like-counter');
        
        //Actualizar contador
        let currentLikes = parseInt(this.dataset.likes);
        currentLikes++;
        this.dataset.likes = currentLikes;
        
        //Actualizar  texto
        likeCounter.textContent = `${currentLikes} like(s)`;
    });
});