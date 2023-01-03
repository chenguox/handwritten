import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      books: [
        { name: "你不知道JS", price: 99, count: 1 },
        { name: "JS高级程序设计", price: 88, count: 1 },
        { name: "React高级设计", price: 78, count: 2 },
        { name: "Vue高级设计", price: 95, count: 3 },
      ],
      friend: {
        name: "kobe"
      },
      message: "Hello World"
    }
  }

  addBookCount(index) {
    console.log('addBookCount');
    // 错误的做法
    // this.state.books[index].count++

    const books = [...this.state.books]
    books[index].count++

    this.setState({
      books: books
    })
  }

  addNewBook() {
    const newBook = { name: "Angular高级设计", price: 88, count: 1 }
    console.log('addNewBook');

    // 1. 直接修改原有的 state, 重新设置一遍
    // 这种在 PureCompnent 是不能引入重新渲染（re-render）
    // this.state.books.push(newBook)
    // this.setState({ books: this.state.books })

    // 2. 正确的做法，赋值一份 books, 在新的 books 中修改， 设置新的 books
    const books = [...this.state.books]
    books.push(newBook)
    this.setState({ books: books })
  }

  render() {
    const { books } = this.state

    return (
      <div>
        <h3>数据列表：</h3>
        <ul>
          {
            books.map((item, index) => {
              return (
                <li key={index}>
                  <span>书名：{item.name} | 价格：{item.price} | 数量：{item.count}</span>
                  <button onClick={e => this.addBookCount(index)}>+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e => this.addNewBook()}>添加新📚</button>
      </div>
    )
  }
}

export default App