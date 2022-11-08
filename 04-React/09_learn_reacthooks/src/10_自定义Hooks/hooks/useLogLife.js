import { useEffect } from 'react'

function useLogLife(name) {
  useEffect(() => {
    console.log(name + '组件被创建')
    return () => {
      console.log(name + '组件被销毁');
    }
  }, [name])
}

export default useLogLife