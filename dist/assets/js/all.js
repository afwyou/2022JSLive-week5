"use strict";

var ticketSetRow = document.querySelector('.ticketSetRow');
var searchSselect = document.querySelector('.search-select');
var searchNum = document.querySelector('.searchNum');
var addTicket = document.querySelector('.addTicket');
var ticketName = document.querySelector('.name');
var pic = document.querySelector('.pic'); // const location = document.querySelector('.location')
// const price = document.querySelector('.price')
// const set = document.querySelector('.set')
// const level = document.querySelector('.level')
// const content = document.querySelector('.content')

console.log(ticketName);
var data = [{
  "id": 0,
  "name": "肥宅心碎賞櫻3日",
  "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
  "area": "高雄",
  "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
  "group": 87,
  "price": 1400,
  "rate": 10
}, {
  "id": 1,
  "name": "貓空纜車雙程票",
  "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "area": "台北",
  "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
  "group": 99,
  "price": 240,
  "rate": 2
}, {
  "id": 2,
  "name": "台中谷關溫泉會1日",
  "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "area": "台中",
  "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
  "group": 20,
  "price": 1765,
  "rate": 7
}]; //畫面渲染

function renderData(data) {
  var str = '';
  data.forEach(function (item, imdex) {
    str += "\n   <div class=\"col-4\">\n        <div class=\"card shadow-sm position-relative h-100\">\n          <div class=\"card-area\">".concat(item.area, "</div>\n          <img src=\"").concat(item.imgUrl, "\" alt=\"...\">\n          <div class=\"card-body p-5 position-relative d-flex flex-column\">\n            <div class=\"rank\">8.6</div>\n            <h2 class=\"card-title text-primary fs-6 border-bottom mb-5 pb-1 border-primary border-3\">").concat(item.name, "</h2>\n            <p class=\"card-text text-secondary\">\n              ").concat(item.description, "\n            </p>\n            <footer class=\"d-flex justify-content-between text-primary align-items-center mt-auto\">\n              <div class=\"fs-4 d-flex\"> <span class=\"material-icons me-1\">\n                  error\n                </span>\u5269\u4E0B\u6700\u5F8C").concat(item.group, "\u7D44</div>\n              <div class=\"fs-8 d-flex align-items-center\"><span class=\"fs-4 me-1\">TWD</span>$").concat(item.price, "</div>\n            </footer>\n          </div>\n        </div>\n      </div>\n   ");
  });
  ticketSetRow.innerHTML = str;
} //初始化


renderData(data); //搜尋套票

searchSselect.addEventListener('change', function (e) {
  var target = e.target;
  var newArr = data.filter(function (item) {
    return item.area === target.value;
  });
  renderData(newArr);
  searchNum.textContent = "\u672C\u6B21\u641C\u5C0B\u5171 ".concat(newArr.length, "\u7B46\u8CC7\u6599");
}); //新增套票
// addTicket.addEventListener('click', function (e) {
//   const target = e.target
//   let obj = {}
//   // console.log(ticketName.value)
//   obj.name = ticketName.value
//   console.log(obj)
// })
//# sourceMappingURL=all.js.map
