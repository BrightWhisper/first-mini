// components/discount_modal/index.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //标题
    title: {
      type: String,
      value: '订单信息'
    },
    // 按钮文字
    confirmBtnTxt: {
      type: String,
      value: '确认支付'
    },
    // 弹出内容
    content: {
      type: Array,
      value: [
        {name: '商品名', txt:'1元大礼包'},
        {name: '数量', txt:'1'},
        {name: '付款金额', txt:'10元'},
      ]
    },
    showModal: {
      type:Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 点击弹框出现
    onClickShowModal(e) {
      console.log(111111111)
      this.setData({
        showModal: true
      })
    },
    // 点击隐藏模态框
    onClickHideModal(e) {
      this.setData({
        showModal: false
      })
    },
    // 点击确认购买时触发
    onClickBuy(e) {
      console.log(e)
      this.triggerEvent("onBuy", e);
    }
  }
})