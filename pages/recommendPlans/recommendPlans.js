// pages/recommendPlans/recommendPlans.js


const Http = require('../../utils/http.js')
const Uris = require('../../utils/urls.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    plans: [],
    detectionId: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({detectionId: options.detectionId});
    this.lodaData();
  },

  lodaData(){
    const that = this;
    Http.GET({ "detectionId": this.data.detectionId }, Uris.RecommendPlanUrl).then(function(res){
      that.setData({plans: res.data.data});
    })
  },
  planDetail(res) {
    const index = res.currentTarget.dataset.index;
    const plan = this.data.plans[index];
    const str = JSON.stringify(plan);
    wx.navigateTo({
      url: '/pages/planDetail/planDetail?plan=' + str,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})