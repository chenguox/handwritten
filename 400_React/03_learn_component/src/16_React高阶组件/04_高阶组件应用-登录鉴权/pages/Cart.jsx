import React, { PureComponent } from 'react'
import loginAuth from '../hoc/loginAuth'

export class Cart extends PureComponent {
  render() {
    return (
      <div>Cart Page</div>
    )
  }
}

export default loginAuth(Cart)