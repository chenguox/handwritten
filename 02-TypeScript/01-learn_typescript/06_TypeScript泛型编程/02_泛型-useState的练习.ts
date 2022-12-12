// 元组: useState 函数
function useState<Type>(initialState: Type): [Type, (newState: Type) => void] {
  let state = initialState
  function setState(newState: Type) {
    state = newState
  }

  return [state, setState]
} 

// 初始化 count
const [count, setCount] = useState(100)
const [message, setMessage] = useState("Hello World")

// 直接传一个空数组是 never 类型, 类型推导错误
// const [banners, setBanners] = useState([])
// 指定类型
const [banners, setBanners] = useState<any[]>([])


export {}