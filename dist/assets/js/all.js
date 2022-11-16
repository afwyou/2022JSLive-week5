"use strict";

var ticketSetRow = document.querySelector('.ticketSetRow');
var searchSselect = document.querySelector('.search-select');
var searchNum = document.querySelector('.searchNum');
var addTicket = document.querySelector('.addTicket');
var ticketName = document.querySelector('.name');
var pic = document.querySelector('.pic');
var area = document.querySelector('.area');
var price = document.querySelector('.price');
var group = document.querySelector('.group');
var rate = document.querySelector('.rate');
var description = document.querySelector('.description');
var myForm = document.querySelector('.myForm');
var data = {};
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json').then(function (response) {
  data = response.data.data;
  console.log(data);
  renderData(data); //圖表製作
  //先做一個篩選資料的物件
  //沒辦法直接做成陣列，因為陣列會在forEach覆蓋前一筆資料

  var graphicObj = {};
  data.forEach(function (item) {
    if (graphicObj[item.area] == undefined) {
      graphicObj[item.area] = 1;
    } else {
      graphicObj[item.area] += 1;
    }
  });
  console.log(graphicObj);
  var newData = [];
  var area = Object.keys(graphicObj);
  console.log(area);
  area.forEach(function (item) {
    var arr = [];
    arr.push(item);
    arr.push(graphicObj[area]);
    console.log(arr);
    newData.push(arr);
    console.log(newData);
  });
}); //畫面渲染

function renderData(data) {
  var str = '';
  data.forEach(function (item, index) {
    str += "\n   <div class=\"col-4 mb-9\">\n        <div class=\"card shadow-sm position-relative h-100\">\n          <div class=\"card-area\">".concat(item.area, "</div>\n          <img src=\"").concat(item.imgUrl, "\" alt=\"...\">\n          <div class=\"card-body p-5 position-relative d-flex flex-column\">\n            <div class=\"rank\">8.6</div>\n            <h2 class=\"card-title text-primary fs-6 border-bottom mb-5 pb-1 border-primary border-3\">").concat(item.name, "</h2>\n            <p class=\"card-text text-secondary\">\n              ").concat(item.description, "\n            </p>\n            <footer class=\"d-flex justify-content-between text-primary align-items-center mt-auto\">\n              <div class=\"fs-4 d-flex\"> <span class=\"material-icons me-1\">\n                  error\n                </span>\u5269\u4E0B\u6700\u5F8C").concat(item.group, "\u7D44</div>\n              <div class=\"fs-8 d-flex align-items-center\"><span class=\"fs-4 me-1\">TWD</span>$").concat(item.price, "</div>\n            </footer>\n          </div>\n        </div>\n      </div>\n   ");
  });
  ticketSetRow.innerHTML = str;
  searchNum.textContent = "\u672C\u6B21\u641C\u5C0B\u5171 ".concat(data.length, "\u7B46\u8CC7\u6599");
} //搜尋套票


searchSselect.addEventListener('change', function (e) {
  var target = e.target;
  var newArr = [];

  if (target.value === '地區搜尋') {
    renderData(data.data);
    searchNum.textContent = "\u672C\u6B21\u641C\u5C0B\u5171 ".concat(data.data.length, "\u7B46\u8CC7\u6599");
  } else {
    newArr = data.data.filter(function (item) {
      return item.area === target.value;
    }); // console.log(newArr)

    renderData(newArr);
  }
}); // 新增套票

addTicket.addEventListener('click', function (e) {
  var target = e.target;
  var obj = {};

  if (ticketName.value === '' || pic.value === '' || area.value === '' || description.value === '' || group.value === '' || price.value === '' || rate.value === '') {
    return alert('您有資料未填完整');
  } // console.log(ticketName.value)


  obj.id = data.length + 1;
  obj.name = ticketName.value;
  obj.imgUrl = pic.value;
  obj.area = area.value;
  obj.description = description.value;
  obj.group = group.value;
  obj.price = price.value;
  obj.rate = rate.value; // console.log(obj)

  data.data.push(obj);
  renderData(data.data); // ticketName.value, pic.value, area.value, description.value, group.value, price.value, rate.value = ''

  myForm.reset();
  searchSselect.value = '地區搜尋';
});
var chart = c3.generate({
  bindto: '#chart',
  data: {
    columns: [['data1', 30], ['data2', 50]],
    type: 'donut'
  },
  donut: {
    title: "套票地區比重"
  }
});
//# sourceMappingURL=all.js.map
