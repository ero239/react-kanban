import React, {PureComponent} from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

import style from './style.scss';

import BoardHeader from '../BoardHeader/BoardHeader.jsx';
import List from '../List/List.jsx';
import AddList from '../AddList/AddList.jsx';
import PopUp from '../PopUp/PopUp.jsx';

export default class Board extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfLists: [],
      boardTitle: '',
      _i: 0
    };

    this.deleteList = this.deleteList.bind(this);
    this.addNewList = this.addNewList.bind(this);
    this.getDatafromStorage = this.getDatafromStorage.bind(this);
    this.createArrayofList = this.createArrayofList.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount = () => {
    this.getDatafromStorage();
    this.createArrayofList();
  };
  componentDidUpdate = () => {
    this.getDatafromStorage();
  };

  createArrayofList = () => {
    var _array = localStorage.getItem('array');
    if (_array == null) {
      localStorage.setItem('array', JSON.stringify([]));
    } else {
      this.setState({
        arrayOfLists: JSON.parse(_array)
      });
    }
  };

  getDatafromStorage = () => {
    var _boardTitle = localStorage.getItem('boardTitle');
    this.setState({
      boardTitle: _boardTitle
    });
  };

  deleteList = (listID) => {
    var _array = JSON.parse(localStorage.getItem('array'));
    _array.splice(listID, 1);
    localStorage.setItem('array', JSON.stringify(_array));
    this.setState({
      arrayOfLists: _array
    });
  };

  addNewList = () => {
    var _array = JSON.parse(localStorage.getItem('array'));
    _array.push({title: '', cards: []});
    localStorage.setItem('array', JSON.stringify(_array));
    this.setState({
      arrayOfLists: _array
    });
  };
  addNewCard = (listID) => {
    var _array = JSON.parse(localStorage.getItem('array'));
    _array[listID].cards.push({cardText: ''});
    localStorage.setItem('array', JSON.stringify(_array));
    this.setState({
      arrayOfLists: _array
    });
  };

  deleteCard = (listID, cardID) => {
    var _array = JSON.parse(localStorage.getItem('array'));
    console.log(_array[listID]);
    var _arrayCards = _array[listID].cards;
    _arrayCards.splice(cardID, 1);
    _array[listID].cards = _arrayCards;
    localStorage.setItem('array', JSON.stringify(_array));
    this.setState({
      arrayOfLists: _array
    });
    console.log(_array[listID]);
  };

  render() {
    return (
      <section id="board" className={style.board}>
        <div style={{display: 'none'}}>
          <PopUp />
        </div>
        <BoardHeader boardTitle={this.state.boardTitle} />
        <div className={style.boardListWrapper}>
          {this.state.arrayOfLists.map((value, i) => {
            return (
              <List
                key={i}
                arrayofCards={value.cards}
                listID={i}
                listTitle={this.state.arrayOfLists[i].title}
                onAddNewCard={(listID) => this.addNewCard(listID)}
                onDeleteList={(listID) => this.deleteList(listID)}
                onDeleteCard={(listID, cardID) => this.deleteCard(listID, cardID)}
              />
            );
          })}
          <AddList onAddNewList={() => this.addNewList()} />
        </div>
      </section>
    );
  }
}
