import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import {
  changeBannerAction,
  changeRecommendAction,
} from '../store/actionCreators'

export class Home extends PureComponent {
  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list

      this.props.changeBanner(banners)
      this.props.changeRecommend(recommends)
    })
  }

  render() {
    const { banners, recommends } = this.props

    return (
      <div>
        <h2>Home-轮播图数据:</h2>
        <ul>
          {
            banners.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })
          }
        </ul>
        <h2>Home-推荐数据</h2>
        <ul>
          {
            recommends.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  banners: state.banners,
  recommends: state.recommends,
})

const mapDispatchToProps = (dispatch) => ({
  changeBanner: function (banners) {
    dispatch(changeBannerAction(banners))
  },
  changeRecommend: function (recommends) {
    dispatch(changeRecommendAction(recommends))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
