import React, { memo, useRef, forwardRef, useImperativeHandle } from 'react'

// const About = memo(forwardRef((props, ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   )
// }))

// 在子组件中使用 useImperativeHandle 做限制
const About = memo(forwardRef((props, ref) => {
  const inputRef = useRef()

  useImperativeHandle(ref, () => {
    return {
      focus() {
        console.log('focus');
        inputRef.current.focus()
      },
      setValue(value) {
        inputRef.current.value = value
      }
    }
  })

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}))

const App = memo(() => {
  const inputRef = useRef()

  function handleInputRef() {
    // 暴露完全的dom操作，非常不好
    // inputRef.current.focus()
    // inputRef.current.value = '哈哈哈'
    // 在子组件中使用 useImperativeHandle 做限制
    inputRef.current.focus()
    inputRef.current.setValue('哈哈哈的')
  }

  return (
    <div>
      <About ref={inputRef} />
      <button onClick={handleInputRef}>获取焦点</button>
    </div>
  )
})

export default App