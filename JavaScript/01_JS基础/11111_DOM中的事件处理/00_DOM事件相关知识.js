/*
1、事件监听方式：
  方式一：在script中直接监听（很少使用）
  方式二：DOM属性，通过元素的on来监听事件
  方式三：通过EventTarget中的addEventListener来监听；

2、事件流
  事件冒泡：从最内层的span向外依次传递的顺序
  事件捕获：从外层到内层（body -> span）
  事件捕获和冒泡的过程：
   * 捕获阶段 1
        事件（从 Window）向下走近元素
   * 目标阶段 2 
        事件到达目标元素
   * 冒泡阶段 3
        事件从元素上开始冒泡
  
3、事件(event)常见的属性和方法
    常见的属性：
      * type：事件的类型；
      * target：当前事件发生的元素；
      * currentTarget：当前处理事件的元素；
      * eventPhase：事件所处的阶段；
      * offsetX、offsetY：事件发生在元素内的位置；
      * clientX、clientY：事件发生在客户端内的位置；
      * pageX、pageY：事件发生在客户端相对于document的位置；
      * screenX、screenY：事件发生相对于屏幕的位置；
    常见的方法：
      * preventDefault：取消事件的默认行为；
      * stopPropagation：阻止事件的进一步传递（冒泡或者捕获都可以阻止）；

5、事件处理中的this
    * 在函数中，我们也可以通过this来获取当前的发生元素
    * 这是因为在浏览器内部，调用event handler是绑定到当前的target上的

4、EventTarget类
    我们会发现，所有的节点、元素都继承自EventTarget
      * 事实上Window也继承自EventTarget；
    那么这个EventTarget是什么呢？
      * EventTarget是一个DOM接口，主要用于添加、删除、派发Event事件；
    EventTarget常见的方法：
      * addEventListener：注册某个事件类型以及事件处理函数
      * removeEventListener：移除某个事件类型以及事件处理函数；
      * dispatchEvent：派发某个事件类型到EventTarget上；
  
5、事件委托
    事件冒泡在某种情况下可以帮助我们实现强大的事件处理模式 – 事件委托模式
    那么这个模式是怎么样的呢？
      * 因为当子元素被点击时，父元素可以通过冒泡可以监听到子元素的点击；
      * 并且可以通过event.target获取到当前监听的元素；

   事件委托的标记
      * 某些事件委托可能需要对具体的子组件进行区分，
        这个时候我们可以使用data-*对其进行标记：

6、常见的鼠标事件
    click 当用户点击某个对象时调用的事件句柄。
    contextmenu 在用户点击鼠标右键打开上下文菜单时触发
    dblclick 当用户双击某个对象时调用的事件句柄。
    mousedown 鼠标按钮被按下。
    mouseup 鼠标按键被松开。
    mouseover 鼠标移到某元素之上。（支持冒泡）
    mouseout 鼠标从某元素移开。（支持冒泡）
    mouseenter 当鼠标指针移动到元素上时触发。（不支持冒泡）
    mouseleave 当鼠标指针移出元素时触发。（不支持冒泡）
    mousemove 鼠标被移动。

7、常见的键盘事件
    onkeydown 某个键盘按键被按下。
    onkeypress 某个键盘按键被按下。
    onkeyup 某个键盘按键被松开。

  通过key和code来区分按下的键：
   * code：“按键代码”（"KeyA"，"ArrowLeft" 等），特定于键盘上按键的物理位置
   * key：字符（"A"，"a" 等），对于非字符（non-character）的按键，通常具有与 code 相同的值。）

8、常见的表单事件

    onchange 该事件在表单元素的内容改变时触发
             (<input>, <keygen>, <select>, 和 <textarea>)
    oninput 元素获取用户输入时触发
    onfocus 元素获取焦点时触发
    onblur 元素失去焦点时触发
    onreset 表单重置时触发
    onsubmit 表单提交时触发

9、文档加载事件
  DOMContentLoaded：浏
    览器已完全加载 HTML，并构建了 DOM 树，但像 <img> 和样式表之类的外部资源可能尚未加载完成

  load：浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等

*/





