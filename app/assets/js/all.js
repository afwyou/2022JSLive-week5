const ticketSetRow = document.querySelector('.ticketSetRow')
const searchSselect = document.querySelector('.search-select')
const searchNum = document.querySelector('.searchNum')
const addTicket = document.querySelector('.addTicket')
const ticketName = document.querySelector('.name')
const pic = document.querySelector('.pic')
const area = document.querySelector('.area')
const price = document.querySelector('.price')
const group = document.querySelector('.group')
const rate = document.querySelector('.rate')
const description = document.querySelector('.description')
const myForm = document.querySelector('.myForm')

let data = {}

axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
  .then(function (response) {
    data = response.data.data
    console.log(data)
    renderData(data)
    renderGraphic(data)
  })

//畫面渲染
function renderData(data) {
  let str = ''
  data.forEach(function (item, index) {
    str += `
   <div class="col-4 mb-9">
        <div class="card shadow-sm position-relative h-100">
          <div class="card-area">${item.area}</div>
          <img src="${item.imgUrl}" alt="...">
          <div class="card-body p-5 position-relative d-flex flex-column">
            <div class="rank">8.6</div>
            <h2 class="card-title text-primary fs-6 border-bottom mb-5 pb-1 border-primary border-3">${item.name}</h2>
            <p class="card-text text-secondary">
              ${item.description}
            </p>
            <footer class="d-flex justify-content-between text-primary align-items-center mt-auto">
              <div class="fs-4 d-flex"> <span class="material-icons me-1">
                  error
                </span>剩下最後${item.group}組</div>
              <div class="fs-8 d-flex align-items-center"><span class="fs-4 me-1">TWD</span>$${item.price}</div>
            </footer>
          </div>
        </div>
      </div>
   `
  })
  ticketSetRow.innerHTML = str
  searchNum.textContent = `本次搜尋共 ${data.length}筆資料`
}
//搜尋套票
searchSselect.addEventListener('change', function (e) {
  const target = e.target
  let newArr = []
  if (target.value === '地區搜尋') {
    renderData(data)
    searchNum.textContent = `本次搜尋共 ${data.length}筆資料`
  } else {
    newArr = data.filter(function (item) {
      return item.area === target.value
    })
    // console.log(newArr)
    renderData(newArr)
  }
})

// 新增套票
addTicket.addEventListener('click', function (e) {
  let obj = {}
  if (ticketName.value === '' || pic.value === '' || area.value === '' || description.value === '' || group.value === '' || price.value === '' || rate.value === '') {
    return alert('您有資料未填完整')
  }
  obj.id = data.length + 1
  obj.name = ticketName.value
  obj.imgUrl = pic.value
  obj.area = area.value
  obj.description = description.value
  obj.group = group.value
  obj.price = price.value
  obj.rate = rate.value
  data.push(obj)
  renderData(data)
  myForm.reset()
  renderGraphic(data)
  searchSselect.value = '地區搜尋'
})


//圖表資料製作
function renderGraphic(data) {
  //先做一個篩選資料的物件
  //沒辦法直接做成陣列，因為陣列會在forEach覆蓋前一筆資料
  let graphicObj = {}
  let newData = []
  data.forEach(function (item) {
    if (graphicObj[item.area] == undefined) {
      graphicObj[item.area] = 1
    } else {
      graphicObj[item.area] += 1
    }
  })
  let area = Object.keys(graphicObj)
  area.forEach(function (item) {
    let arr = []
    arr.push(item)
    arr.push(graphicObj[item])
    newData.push(arr)
  })

  var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: newData,
      type: 'donut',
    },
    donut: {
      title: "套票地區比重"
    }
  });
}


