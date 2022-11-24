import { memo } from 'react'

// 函数组件使用 memo
const About = memo(function(props) {
  console.log("profile render")
  return (
    <div>About: {props.message}</div>
  )
})

export default About