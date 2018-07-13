
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({
  onReady : function(){
     this.videoContext= wx.createVideoContext('myvideo')

  },
     data :{
       src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
     damulist : [
       {text :'第一秒出现的弹幕', color :'red' ,time :1},
       {text :'第三秒出现的弹幕',color:'blue',time :3}
     ]
     },
     bindButtonTap : function(){
       wx.chooseVideo({
         sourceType : ['album','camera'],
         maxDuration :60,
         camera :['front','back'],
         success : function(res){
             src:res.tempFilePath
         }
       })
     },
     bindInputBlur : function(e){
       this.inputValue = e.detail.value
     },
     bindSendDanmu : function(){
       this.videoContext.sendDanmu({
         text : this.inputValue,
         color: getRandomColor()
       })
     }
})