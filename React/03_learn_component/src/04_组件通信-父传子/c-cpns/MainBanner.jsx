import React, { Component } from 'react'
// 进行数据类型验证
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  // 如果没有传递参数，设置默认的props
  // static defaultProps = {
  //   banners: [],
  //   title: '默认标题'
  // }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { title, banners } = this.props

    return (
      <div className="banner">
        <h2>封装一个轮播图：{title}</h2>
        <ul>
          {banners.map(item => {
            return <li key={item.acm}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

// MainBanner传入的props类型进行验证
MainBanner.propTypes = {
  banners: PropTypes.array,
  title: PropTypes.string
}

// MainBanner传入的props的默认值
MainBanner.defaultProps = {
  banners: [],
  title: '你好，标题'
}

export default MainBanner
