const dataAnterior = document.querySelector("[data-anterior]")
let dataIndex = document.querySelector("[data-index]")
const dataProxima = document.querySelector("[data-proximo]")
const dataCarroselContainer = document.querySelector("[data-container-carrrosel]")
let dataCarroselContainerDivs = document.querySelectorAll("[data-container-carrrosel] > div")

let index = 0

function anterior(){
  if(index <= 1 ){
    dataIndex.innerHTML = index
  } else{
    index--
  }

  dataIndex.innerHTML = index
  dataCarroselContainer.style.transform = `translateX(${(index - 1) * -430}px)`
}

dataAnterior.addEventListener("click" ,() =>{
  anterior()
})


function proxima(){
  if(index >= dataCarroselContainerDivs.length ){
    index = 1
  }else{
    index++
  }

  dataIndex.innerHTML = index

  dataCarroselContainer.style.transform = `translateX(${(index -1) * -430}px)`
}

dataProxima.addEventListener("click" ,() =>{
  proxima()
})

proxima()