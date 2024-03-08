window.onload = () => {
        document.body.classList.remove("container");
    
        setTimeout(function() {
            var leftImg = document.querySelector('.left-img');
            var rightImg = document.querySelector('.right-img');
            
            leftImg.classList.add('show');
            rightImg.classList.add('show');
        }, 3000);
    };
    