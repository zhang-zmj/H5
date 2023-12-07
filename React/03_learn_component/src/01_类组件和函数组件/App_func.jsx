// 函数式组件
function App(props) {
  // 返回值：和类组件中render函数返回的是一致
  return <h1>函数式 组件</h1>
}

export default App

/*
1、没有生命周期，也会被更新并挂载，但是没有生命周期函数
2、this关键字不能指向组件实例（因为没有组件实例）
3、没有内部状态（state）
*/
