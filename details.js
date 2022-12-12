

const Base_Url="https://restcountries.com/v3.1/all"
let detail=localStorage.getItem("detail_storage")


async function getDetailData(detail) {
    await axios.get(`${Base_Url}/name/${detail}`)
    .then((res) => {
      console.log(res.data)
    });
  }
getDetailData()