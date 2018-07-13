Page({
    onReady : function(){
      this.audioContext = wx.createAudioContext('myaudio');
      this.audioContext.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46');
      
  },
  action : function(e){
      var type = e.target.dataset.type,
      audioContext = this.audioContext;
      
      switch (type){
        case 'play' :
          audioContext.play();
          break;
        case 'pause' :
          audioContext.pause();
          break;
        case 'seek':
          audioContext.seek(30);
          break;
        case 'reset':
          audioContext.seek(0);
          break;
      }
  }
})