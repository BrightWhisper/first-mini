import { config } from '../config.js';
const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appkey无效',
  3000: '期刊不存在',

}
class HTTP {
  request(params) {
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method || 'GET',
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appKey': config.appKey
      },
      success: (res) => {
        let code = res.statusCode + '';
        if (code.startsWith('2')) {
          params.success(res.data);
        } else {
          const error_code = res.data.error_code;
          this._show_error(error_code)
        }
      },
      fail: (err) => {
        this._show_error(1);
      }
    })
  }
  _show_error(error_code) {
    wx.showToast({
      title: tips[error_code] || tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export { HTTP };
