function loginAuth(OriginCompoent) {
  return props => {
    // 从localStorage中获取token
    const token = localStorage.getItem("token")
    if (token) {
      return <OriginCompoent {...props} />
    } else {
      return <h2>请先登录, 再进行跳转到对应的页面中</h2>
    }

  }
}

export default loginAuth