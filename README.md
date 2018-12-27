# my_lodash
 自己的JavaScript 实用工具库

### 安装
`npm i my_lodash --save`

`<script lang="javascript" src="dist/my_lodash.js"></script>`

### 使用说明

- util
  提供一些工具方法
  ```javascript
  import my_lodash from 'my_lodash';
  let util =  my_lodash.util;

  // 对象的深克隆
  util.deepCloneObj(obj)

  // 关于正则校验
  util.isPhone(phone)
  util.isEmail(email)
  util.isChinese(value)

  // 关于随机
  util.randomRgbColor()
  util.randomHexColor()
  util.randomStr(length)
  util.randomIntNumber(min,max)
  util.randomNumber(min,max)
  ```
- performanceMonitor

  提供四种方法供我们对页面的性能进行监控，开发者可以根据得到的数据进行上报处理。
  ```javascript
  import my_lodash from 'my_lodash';
  let performanceMonitor =  my_lodash.performanceMonitor;

  // 获取所有资源的加载情况，返回一个数组
  performanceMonitor.getAllSourceTime();

  // 获取first-paint和first-contentful-paint的时间，返回一个对象
  performanceMonitor.getPaintTime();

  // 使用window.performance进行性能监控，返回一个对象
  performanceMonitor.performanceWindow();

  // 使用PerformanceObserver监控，返回一个Promise对象，
  performanceMonitor.performanceObserver();
  
  // 使用示例
  performanceMonitor.performanceObserver()
  .then((obj)=>{
    console.log(obj)   // obj为对象，包含了我们进行监控的数据
  })
  ```
  **注意：getAllSourceTime(),getPaintTime(),performanceWindow()需要放在window.onload函数之中，否则一些监控数据会读取不到**


