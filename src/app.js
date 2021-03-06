import { timeTravel } from './react-component-time-travel.js'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1,
    };
  }

  render() {
    const onClick = () => {
      this.setState(state => {
        return { count: state.count + 1 }
      })
    }

    return React.DOM.span({ style: { background: this.props.color, padding: 10 } },
      this.state.count,
      React.DOM.button({ onClick } , '+')
    )
  }
}

const CounterWithTimeTravel = timeTravel(Counter)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      color: 'dimgray',
    };
  }

  render() {
    const createColorButton = color => React.DOM.button({ onClick: e => this.setState({ color: color })}, color)

    return React.DOM.div({ style: { margin: '30px auto', width: 300 } },
      'Color is parent prop. Count is component state',
      React.DOM.hr(),
      createColorButton('dimgray'),
      createColorButton('yellow'),
      createColorButton('tomato'),
      React.createElement(CounterWithTimeTravel, { color: this.state.color }),
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'))
