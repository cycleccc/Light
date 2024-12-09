/*global defineAppConfig */
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/now/index',
    'pages/filming/index',
    'pages/message/index',
    'pages/mine/index',
  ],
  tabBar: {
    backgroundColor: '#fff',
    borderStyle: 'white',
    color: '#808080',
    selectedColor: '#000',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: './assets/footer/front_page.png',
        selectedIconPath: './assets/footer/front_page_active.png',
        text: '首页',
      },
      {
        pagePath: 'pages/now/index',
        iconPath: './assets/footer/now.png',
        selectedIconPath: './assets/footer/now_active.png',
        text: '此刻',
      },
      {
        pagePath: 'pages/filming/index',
        iconPath: './assets/footer/paper_plane.png',
        selectedIconPath: './assets/footer/paper_plane_active.png',
        text: '拍摄',
      },
      {
        pagePath: 'pages/message/index',
        iconPath: './assets/footer/message.png',
        selectedIconPath: './assets/footer/message_active.png',
        text: '消息',
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: './assets/footer/mine.png',
        selectedIconPath: './assets/footer/mine_active.png',
        text: '我的',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});
