import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import {
  fetchHomeMultidataAction
} from '../store/home'

export class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidate()
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
  banners: state.home.banners,
  recommends: state.home.recommends,
})

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidate: function () {
    dispatch(fetchHomeMultidataAction())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
