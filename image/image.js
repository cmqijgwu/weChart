Page({
  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    img: [
      "/images/001.jpg", "/images/002.jpg", "/images/003.jpg", "/images/004.jpg", "/images/005.jpg", "/images/006.jpg"
    ]
  },
  changeIndicatorDots: function () {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
  },
  changeAutoplay: function () {
    this.setData({
      autoplay: !this.data.autoplay
    });
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    });
  },
})