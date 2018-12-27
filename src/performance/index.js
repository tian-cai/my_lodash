// 处理数据
function handleData(performance) {
  let navigationStart = performance.navigationStart || performance.fetchStart
  let performanceData = {}
  if (performance) {
    // 重定向时间
    performanceData.redirectTime = performance.redirectEnd - performance.redirectStart
    // 缓存时间
    performanceData.cacheTime = performance.domainLookupStart - performance.fetchStart
    // dns查询时间
    performanceData.dnsTime = performance.domainLookupEnd - performance.domainLookupStart
    // tcp握手时间
    performanceData.TcpTime = performance.connectEnd - performance.connectStart
    // ajax请求时间
    performanceData.ajaxTime = performance.responseEnd - performance.requestStart
    // 开始解析dom时间，此时document.readyState 变为 loading
    performanceData.domLoadingTime = performance.domLoading ? performance.domLoading - navigationStart : null
    // dom解析完成时间，此时document.readyState 变为 interactive
    performanceData.domInteractiveTime = performance.domInteractive - navigationStart
    // dom解析完成，资源加载完成，脚本完成
    performanceData.domContentLoadedEventEndTime = performance.domContentLoadedEventEnd - navigationStart
    // 页面从开始到结束的全部时间时间
    performanceData.loadPageTime = performance.loadEventEnd ? performance.loadEventEnd - navigationStart : null
  }
  return performanceData
}

// 获取所有资源的时间
function getAllSourceTime() {
  let allSourceTime = []
  if (window.performance && window.performance.getEntries) {
    window.performance.getEntries().forEach(function (item) {
      let temp = {}
      temp.name = item.name
      temp.entryType = item.entryType
      if (item.entryType === 'paint') {
        temp.startTime = item.startTime
      } else {
        temp.transferSize = item.transferSize
        temp.duration = item.duration
        temp.initiatorType = item.initiatorType
      }
      allSourceTime.push(temp)
    })
  }
  return allSourceTime
}

// 获取first-paint和first-contentful-paint的时间
function getPaintTime() {
  let obj = {}
  if (window.performance && window.performance.getEntriesByType) {
    let paintArr = window.performance.getEntriesByType('paint')
    if (paintArr && paintArr.length) {
      paintArr.forEach(function (item) {
        obj[item.name] = item.startTime
      })
    }
  }
  return obj
}

// PerformanceObserver监控
function performanceObserver() {
  let obj = {}
  return new Promise((resolve, reject) => {
    let observer = new PerformanceObserver(list => {
      resolve(list);
    });
    observer.observe({ entryTypes: ['navigation', 'paint'] });
  })
    .then((list) => {
      list.getEntries().forEach(entry => {
        if (entry.entryType === 'paint') {
          obj[entry.name] = entry.startTime
        } else {
          let temp = handleData(entry)
          obj = Object.assign({}, obj, temp)
        }
      })
      obj.from = 'window.PerformanceObserver'
      obj.url = location.href
      obj.timestamp = Date.now()
      return obj
    })
    .catch((error) => {
      console.error(error);
    })

}
// 使用window.performance进行性能监控
function performanceWindow() {
  let timing = window.performance.timing;
  let performanceData = handleData(timing)
  performanceData.timestamp = Date.now()
  performanceData.url = location.href
  performanceData.from = 'window.performance'
  performanceData = Object.assign({}, performanceData, getPaintTime())
  return performanceData
}

let performanceMonitor = {
  getAllSourceTime,
  getPaintTime,
  performanceObserver,
  performanceWindow
}

export default performanceMonitor