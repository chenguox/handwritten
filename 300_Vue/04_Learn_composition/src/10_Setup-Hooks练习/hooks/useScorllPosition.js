import { reactive } from 'vue'

export default function useScrollPosition() {

  // 1. 使用 reactive 记录位置
  const scrollPosition = reactive({
    x: 0,
    y: 0
  })

  // 2. 监听滚动
  document.addEventListener('scroll', () => {
    scrollPosition.x = window.scrollX
    scrollPosition.y = window.scrollY
  })

  return {
    scrollPosition
  }
}