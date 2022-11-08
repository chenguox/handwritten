import { useState, useEffect } from 'react'

function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  function handleScroll() {
    console.log(window.scrollX, window.scrollY);
    setScrollX(window.scrollX)
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return [scrollX, scrollY]
}

export default useScrollPosition