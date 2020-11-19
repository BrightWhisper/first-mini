// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: Boolean,
    count: Number
  },
  observers: {
  },
  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      const count = this.data.like ? this.data.count - 1 : this.data.count + 1;
      const like = !this.data.like;
      this.setData({
        count,
        like
      })
    }
  }
})