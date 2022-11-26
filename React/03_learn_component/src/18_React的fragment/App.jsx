import React, { Fragment, PureComponent } from 'react'

/*
◼ 我们又希望可以不渲染这样一个div应该如何操作呢？
    * 使用Fragment
    * Fragment 允许你将子列表分组，而无需向 DOM 添加额外节点；
◼ React还提供了Fragment的短语法：
    * 它看起来像空标签 <> </>； 
    * 但是，如果我们需要在Fragment中添加key，那么就不能使用短语法
*/
export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      sections: [
        { title: '哈哈哈', content: '我是内容, 哈哈哈' },
        { title: '呵呵呵', content: '我是内容, 呵呵呵' },
        { title: '嘿嘿嘿', content: '我是内容, 嘿嘿嘿' },
        { title: '嘻嘻嘻', content: '我是内容, 嘻嘻嘻' }
      ]
    }
  }
  render() {
    const { sections } = this.state
    return (
      <>
        <h2>我是APP的标题</h2>
        <p>我是APP的内容，哈哈哈哈</p>
        <hr />
        {sections.map(item => {
          return (
            <Fragment key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </Fragment>
          )
        })}
      </>
    )
  }
}
