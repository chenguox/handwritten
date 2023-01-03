import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchHomeMultidataAction } from '../store/features/home.js'

export class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata({name: "why", age: 18})
  }

  render() {
    const { banners, counter } = this.props

    return (
      <div>
        <h2>Home-counter: { counter }</h2>
        <h2>Home-推荐页数据</h2>
        <ul>
          {
            banners.map((item, index) => {
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
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidata(payload) {
    dispatch(fetchHomeMultidataAction(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)