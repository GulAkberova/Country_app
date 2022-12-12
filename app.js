let country_bigdiv = document.querySelector(".country_bigdiv");
let search = document.getElementById("search");
let select_region = document.getElementById("select_region");
let option = document.querySelector("#option");
let drop = document.querySelector(".drop");
let dropdown = document.querySelector(".dropdown");
let region = document.querySelectorAll("#region");
let dark=document.getElementById('dark')
dark.addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('dark')
    
})

drop.addEventListener("click", function () {
  dropdown.classList.toggle("add");
  console.log('efwe')
});

const Base_Url="https://restcountries.com/v3.1/all"
async function getData() {
    await axios.get(Base_Url)
    .then((res) => {
      fillData(res.data);
    //   console.log(res.data)
    });
  }
getData()

function fillData(index){
    index.forEach(element => {

    let country_div=document.createElement('div')
    country_div.classList.add('country_div')
   

    let country_image=document.createElement('div')
    country_image.classList.add('country_image')
    let a_div=document.createElement('a')
    a_div.setAttribute("href",'details.html')
    a_div.setAttribute("target","blank")
    let img_div=document.createElement('img')
    img_div.src=element.flags.svg
    a_div.appendChild(img_div)
    country_image.appendChild(a_div)


    let country_text=document.createElement('div')
    country_text.classList.add('country_text')
   
    let h_div=document.createElement('h1')
    h_div.innerHTML=element.name.common
     country_text.appendChild(h_div)
   let p_div1=document.createElement('p')
   p_div1.innerHTML= `<p>Population:${element.population}</p>`
   country_text.appendChild(p_div1)
   let p_div2=document.createElement('p')
   p_div2.innerHTML= `<p>Region:${element.region}</p>`
   country_text.appendChild(p_div2)
   let p_div3=document.createElement('p')
   p_div3.innerHTML= `<p>Capital:${element.capital}</p>`
   country_text.appendChild(p_div3)

  country_div.appendChild(country_image)
  country_div.appendChild(country_text)
  country_bigdiv.append(country_div)

  a_div.addEventListener('click',()=>{
    // console.log('aldim')
    window.location = "./details.html";
    let detail_storage=element.name.common
    localStorage.setItem("detail_storage",detail_storage)
    // console.log( detail_storage)
     
  })
        
    });

}



function createError() {
  country_bigdiv.innerHTML = " ";
  let createErrorElement = document.createElement("h1");
  createErrorElement.setAttribute("class", "error");
  createErrorElement.innerText = "Error";
  country_bigdiv.append(createErrorElement);
}

search.addEventListener("input", function searching(e) {
  country_bigdiv.innerHTML = " ";
  if (search.value === '') {
    country_bigdiv.innerHTML = " ";
    console.log("ewffe");
    getData()
    return
  }

  axios
    .get(`https://restcountries.com/v3.1/name/${search.value}`)
    .then((res) => {
      fillData(res.data);
    })
    .catch((err) => {
      createError(err);
    });
});

region.forEach((element) => {
  // console.log(element);
  element.addEventListener("click", function () {
    country_bigdiv.innerHTML = " ";

    let region_name = element.innerText;
    axios
      .get(` https://restcountries.com/v3.1/region/${region_name}`)
      .then((res) => {
        fillData(res.data);
      });
  });
});
