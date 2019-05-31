import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card.jsx';

import style from './style.scss';

export default class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      _titleHeight: 22
    };
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  onChangeTitle = () => {
    var _nodeOfTitle = ReactDOM.findDOMNode(this.titleRef);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    ctx.font = 'bold 18px Roboto';
    var width = ctx.measureText(_nodeOfTitle.value).width;
    this.setState({
      _titleHeight: 20 + Math.trunc(width / 205) * 20
    });
    var _array = JSON.parse(localStorage.getItem('array'));
    _array[this.props.listID].title = _nodeOfTitle.value;
    localStorage.setItem('array', JSON.stringify(_array));
  };

  addNewCard = () => {
    this.props.onAddNewCard(this.props.listID);
  };

  deleteList = () => {
    this.props.onDeleteList(this.props.listID);
  };
  deleteCard = (cardID) => {
    this.props.onDeleteCard(this.props.listID, cardID);
  };

  render() {
    return (
      <section id="list" className={style.list}>
        <header className={style.listHeader}>
          <textarea
            style={{height: this.state._titleHeight + 'px'}}
            spellCheck="false"
            maxLength="250"
            ref={(node) => {
              this.titleRef = node;
            }}
            placeholder="Список дел 📝"
            onSelect={() => this.onChangeTitle()}
          >
            {this.props.listTitle}
          </textarea>
          <img
            onClick={() => this.deleteList()}
            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDcuOTcxIDQ3Ljk3MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuOTcxIDQ3Ljk3MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yOC4yMjgsMjMuOTg2TDQ3LjA5Miw1LjEyMmMxLjE3Mi0xLjE3MSwxLjE3Mi0zLjA3MSwwLTQuMjQyYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBMMjMuOTg2LDE5Ljc0NEw1LjEyMSwwLjg4ICAgYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDJsMTguODY1LDE4Ljg2NEwwLjg3OSw0Mi44NWMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0MiAgIEMxLjQ2NSw0Ny42NzcsMi4yMzMsNDcuOTcsMyw0Ny45N3MxLjUzNS0wLjI5MywyLjEyMS0wLjg3OWwxOC44NjUtMTguODY0TDQyLjg1LDQ3LjA5MWMwLjU4NiwwLjU4NiwxLjM1NCwwLjg3OSwyLjEyMSwwLjg3OSAgIHMxLjUzNS0wLjI5MywyLjEyMS0wLjg3OWMxLjE3Mi0xLjE3MSwxLjE3Mi0zLjA3MSwwLTQuMjQyTDI4LjIyOCwyMy45ODZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM2RThGQjUiIGRhdGEtb2xkX2NvbG9yPSIjNmU4ZmI1Ij48L3BhdGg+CjwvZz48L2c+IDwvc3ZnPg=="
          />
        </header>
        <div className={style.listCardArrayWrapper}>
          <div className={style.listCardArray}>
            {this.props.arrayofCards.map((item, i) => {
              return (
                <Card
                  key={i}
                  listID={this.props.listID}
                  cardID={i}
                  cardText={item.cardText}
                  onDeleteCard={(cardID) => this.deleteCard(cardID)}
                />
              );
            })}
          </div>
        </div>
        <div className={style.listAddCard} onClick={() => this.addNewCard()}>
          <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzEuNDQ0IDMxLjQ0NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzEuNDQ0IDMxLjQ0NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBzdHlsZT0iZmlsbDojNkU4RkI1IiBkPSJNMS4xMTksMTYuODQxYy0wLjYxOSwwLTEuMTExLTAuNTA4LTEuMTExLTEuMTI3YzAtMC42MTksMC40OTItMS4xMTEsMS4xMTEtMS4xMTFoMTMuNDc1VjEuMTI3ICBDMTQuNTk1LDAuNTA4LDE1LjEwMywwLDE1LjcyMiwwYzAuNjE5LDAsMS4xMTEsMC41MDgsMS4xMTEsMS4xMjd2MTMuNDc2aDEzLjQ3NWMwLjYxOSwwLDEuMTI3LDAuNDkyLDEuMTI3LDEuMTExICBjMCwwLjYxOS0wLjUwOCwxLjEyNy0xLjEyNywxLjEyN0gxNi44MzN2MTMuNDc2YzAsMC42MTktMC40OTIsMS4xMjctMS4xMTEsMS4xMjdjLTAuNjE5LDAtMS4xMjctMC41MDgtMS4xMjctMS4xMjdWMTYuODQxSDEuMTE5eiIgZGF0YS1vcmlnaW5hbD0iIzFFMjAxRCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzZlOGZiNSI+PC9wYXRoPjwvZz4gPC9zdmc+" />
          <span>Добавить карточку</span>
        </div>
      </section>
    );
  }
}
