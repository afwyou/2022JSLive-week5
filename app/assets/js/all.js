

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


let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];

//畫面渲染
function renderData(data) {
  let str = ''
  data.forEach(function (item, imdex) {
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
}

//初始化
renderData(data)

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
    searchNum.textContent = `本次搜尋共 ${newArr.length}筆資料`
  }



})

// 新增套票
addTicket.addEventListener('click', function (e) {
  const target = e.target
  let obj = {}
  if (ticketName.value === '' || pic.value === '' || area.value === '' || description.value === '' || group.value === '' || price.value === '' || rate.value === '') {
    return alert('您有資料未填完整')

  }
  // console.log(ticketName.value)
  obj.id = data.length + 1
  obj.name = ticketName.value
  obj.imgUrl = pic.value
  obj.area = area.value
  obj.description = description.value
  obj.group = group.value
  obj.price = price.value
  obj.rate = rate.value
  // console.log(obj)
  data.push(obj)
  renderData(data)
  // ticketName.value, pic.value, area.value, description.value, group.value, price.value, rate.value = ''
  myForm.reset()
  searchSselect.value = '地區搜尋'
})