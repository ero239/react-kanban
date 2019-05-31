import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import style from './style.scss';

export default class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      _cardHeight: 18,
      _cardText: ''
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  onChangeText = () => {
    var _nodeOfTitle = ReactDOM.findDOMNode(this.cardRef);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    ctx.font = '15px Roboto';
    var width = ctx.measureText(_nodeOfTitle.value).width;
    this.setState({
      _cardHeight: 20 + Math.trunc(width / 253) * 18
    });
    var _array = JSON.parse(localStorage.getItem('array'));
    _array[this.props.listID].cards[this.props.cardID].cardText = _nodeOfTitle.value;
    localStorage.setItem('array', JSON.stringify(_array));
  };

  deleteCard = () => {
    this.props.onDeleteCard(this.props.cardID);
  };

  componentDidMount = () => {
    this.setState({
      _cardText: this.props._cardText
    });
  };

  componentDidUpdate = () => {
    this.setState({
      _cardText: this.props._cardText
    });
  };



  render() {
    return (
      <div id="card" draggable="true" className={style.card}>
        <img
          onClick={() => this.deleteCard()}
          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDcuOTcxIDQ3Ljk3MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuOTcxIDQ3Ljk3MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yOC4yMjgsMjMuOTg2TDQ3LjA5Miw1LjEyMmMxLjE3Mi0xLjE3MSwxLjE3Mi0zLjA3MSwwLTQuMjQyYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBMMjMuOTg2LDE5Ljc0NEw1LjEyMSwwLjg4ICAgYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDJsMTguODY1LDE4Ljg2NEwwLjg3OSw0Mi44NWMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0MiAgIEMxLjQ2NSw0Ny42NzcsMi4yMzMsNDcuOTcsMyw0Ny45N3MxLjUzNS0wLjI5MywyLjEyMS0wLjg3OWwxOC44NjUtMTguODY0TDQyLjg1LDQ3LjA5MWMwLjU4NiwwLjU4NiwxLjM1NCwwLjg3OSwyLjEyMSwwLjg3OSAgIHMxLjUzNS0wLjI5MywyLjEyMS0wLjg3OWMxLjE3Mi0xLjE3MSwxLjE3Mi0zLjA3MSwwLTQuMjQyTDI4LjIyOCwyMy45ODZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM2RThGQjUiIGRhdGEtb2xkX2NvbG9yPSIjNmU4ZmI1Ij48L3BhdGg+CjwvZz48L2c+IDwvc3ZnPg=="
        />
        <textarea
          style={{height: this.state._cardHeight + 'px'}}
          spellCheck="false"
          ref={(node) => {
            this.cardRef = node;
          }}
          placeholder="Заголовок карточки"
          onSelect={() => this.onChangeText()}
        >
          {this.state._cardText}
        </textarea>
      </div>
    );
  }
}
