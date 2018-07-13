const date = new Date()
const years = []
const months = []
const days = []
for (let i = 1900; i <= date.getFullYear(); i++) {
  years.push(i)
}
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
for (let i = 1; i <= 31; i++) {
  days.push(i)
}
Page({
  data: {
    startDate: "1990-12-31",
    endDate: "2018-12-31",
    selectDate: "2018-04-26",
  },
    change3: function (e) {
      this.setData({
        selectDate: e.detail.value
      });
    },
    bindChange: function (e) {
      const val = e.detail.value
      this.setData({
        year: this.data.years[val[0]],
        month: this.data.months[val[1]],
        day: this.data.days[val[2]]
      });
    },
    //点击提交时打印当前数据
    formSubmit: function (e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    //重置表单
    formReset: function () {
      console.log('form发生了reset事件')
    },
  
})