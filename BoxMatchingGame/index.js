tailwind.config = {
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
          },
      extend: {
        colors: {
          clifford: '#da373d',
        }
      }
    }
  }

  const nodeBackGround = document.getElementById('parentNode');





//dsfsdfsdfsd
nodeBackGround.addEventListener('click', function(e) {
    if(e.target.id !== 'parentNode'){
        e.target.style.backgroundColor = "blue"
    } 
    
});