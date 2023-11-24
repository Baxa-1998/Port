let popup = document.querySelector(".popup") 

let openPopupBtn = document.querySelector('.burger') 

let closePopupBtn = document.querySelector('.open_popup')



openPopupBtn.addEventListener("click", function(){
  popup.classList.add('active') 
  
})

closePopupBtn.addEventListener("click", function(){
  popup.classList.remove('active') 
  
})