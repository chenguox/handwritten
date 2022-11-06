import { useNavigate, useParams, useLocation, useSearchParams } from "react-router-dom"

function withRouter(WrapperComponent) {
  return function(props) {
    // 1、获取导航
    const navigate = useNavigate()

    // 2. 动态路由的参数: /detail/:id
    const params = useParams()

    // 3. 查询字符串的参数: /user?name=why&age=18
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries(searchParams)

    const router = { navigate, params, location, query  }

    return <WrapperComponent {...props} router={router}  />
  }
}

export default withRouter