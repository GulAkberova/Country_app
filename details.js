
let detail = localStorage.getItem("detail_storage");
let detail_div=document.querySelector('.detail_div')
console.log(detail);
let dark=document.getElementById('dark')
dark.addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('dark')
    
})

async function getDetailData() {
  await axios.get(` https://restcountries.com/v3.1/name/${detail}?fullText=true`).then((res) => {
    console.log(res.data);
    detailData(res.data)
  });
}

getDetailData();


function detailData(index){
  index.forEach(element => {
    let div_img=document.createElement('div')
    div_img.classList.add('div_img')
    let image=document.createElement('img')
    image.classList.add('image')
    image.src=element.flags.svg
    div_img.appendChild(image)

    let div_text=document.createElement('div')
    div_text.classList.add('div_text')
    let h1=document.createElement('h1')
    h1.innerText=element.name.common
    div_text.appendChild(h1)
    let p_div1=document.createElement('h3')
    p_div1.innerHTML= `<p>Population:${element.population}</p>`
    div_text.appendChild(p_div1)
    let p_div2=document.createElement('h3')
    p_div2.innerHTML= `<p>Region:${element.region}</p>`
    div_text.appendChild(p_div2)
    let p_div3=document.createElement('h3')
    p_div3.innerHTML= `<p>Capital:${element.capital}</p>`
    div_text.appendChild(p_div3)
    detail_div.append(div_img,div_text)

    




  });
}
