const searchInpt = document.querySelector(".country-name ");
//import icon from './javascript.svg';
const searchBtn =document.querySelector(".btn");
const flag =  document.querySelector(".wave")
const curr =  document.querySelector(".curr")
const name =  document.querySelector(".name")
const population =  document.querySelector(".population")
const pert = document.querySelector(".pert");
const pert1 =  document.querySelector(".nei");
let data = 0;
async function contryZone(country){
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
  const resData = await response.json();

  return resData[0];
};


searchBtn.addEventListener("click", ()=>{
  pert.innerHTML =``
contryZone(searchInpt.value).then(resData => {
 
  console.log(resData)
  flag.innerHTML = `<img src="${resData.flags.png}" alt="" class="image">`
  name.innerHTML= `${resData.name.common}`
  curr.innerHTML= `${Object.values(resData.currencies)[0].name}`
population.innerHTML= `${resData.population}`

resData.borders.forEach(prop=>{
let fetchNei = async function(bour){
  const gat = await fetch(`https://restcountries.com/v3.1/alpha/${bour}`);
  const data = await gat.json()
  
  return data
}
fetchNei(prop).then(data=>{
  console.log(data[0].flags.png)
  
  pert.innerHTML +=` <div class="nei">
          <img src="${data[0].flags.png}" alt="" class="per">
        </div>`
})
})
})
})
