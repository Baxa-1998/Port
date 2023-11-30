let popup = document.querySelector(".popup") 

let openPopupBtn = document.querySelector('.burger') 

let closePopupBtn = document.querySelector('.open_popup')



openPopupBtn.addEventListener("click", function(){
  popup.classList.add('active') 
  
})

closePopupBtn.addEventListener("click", function(){
  popup.classList.remove('active') 
  
})



let arrows =  document.querySelectorAll('.cont__item-arrow') 
let inputs = document.querySelectorAll('input')



function toggleArrows (){
  inputs.forEach(elem => { 
    elem.addEventListener("focus", function (){
     let parentWrapper = elem.closest('.contact__item')
     let arrow = parentWrapper.querySelector('.cont__item-arrow')  

       arrow.classList.add('active-arrow')
    
      
     

   
    })
    
  });

    


 

    
}


toggleArrows()


function removeArrows (){
  inputs.forEach(elem => { 
    elem.addEventListener("blur", function (){
     let parentWrapper = elem.closest('.contact__item')
     let arrow = parentWrapper.querySelector('.cont__item-arrow')  
    
       arrow.classList.remove('active-arrow')
   
      
     

   
    })
    
  });

    


 

    
}


removeArrows()




window.addEventListener('scroll', function(){
  let arrowUp = document.querySelector('.arrow__wrap')
  let scrollY = this.pageYOffset
  if(scrollY >= 800){
    arrowUp.style.opacity = "1"
    
  }else{
    arrowUp.style.opacity = "0"
  }
 

})




// link close menu

let menuLinks = document.querySelectorAll('.menu__link') 
menuLinks.forEach(elem => { 

  elem.addEventListener('click', function (){ 
    setTimeout(()=>{
    popup.classList.remove('active')
    },500)
    
  })
  
});




// media


const mediaQuery = window.matchMedia('(max-width: 768px)')
function mediaImage () {


  if(mediaQuery.matches){
    let aboutWrapper = document.querySelector('.about__img') 
    let img = aboutWrapper.querySelectorAll('img')
 
  
    aboutWrapper.classList.remove('disp')
    img[0].style.display = 'block'
    img[1].style.display = 'none'
    console.log('media');
  

  }else{
    let aboutWrapper = document.querySelector('.about__img') 
    let img = aboutWrapper.querySelectorAll('img')
 
  
    aboutWrapper.classList.add('disp')
    img[0].style.display = 'none'
    img[1].style.display = 'none'
    console.log('not media');

  }


}
mediaQuery.addEventListener('change',mediaImage)
mediaImage(mediaQuery)


