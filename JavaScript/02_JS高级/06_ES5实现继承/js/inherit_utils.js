// 创建对象的过程
function createObject(o) {
  function F() { }
  F.prototype = o
  return new F()
}

// 将Subtype和Supertype联系在一起
// 寄生式函数
function inherit(Subtype, Supertype) {

  //1、现代人的角度写法
  // Subtype.prototype.__proto__ = Supertype.prototype
  // Object.setPrototypeOf(Subtype.prototype, Subtype.prototype)

  //2、以前的适配写法
  Subtype.prototype = createObject(Supertype.prototype)
  Object.defineProperty(Subtype.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Subtype
  })


  //3、进行类方法的继承
  // Object.setPrototypeOf(Subtype, Supertype)
  // Subtype.__proto__ = Supertype
}
