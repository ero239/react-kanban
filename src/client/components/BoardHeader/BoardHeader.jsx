import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import style from './style.scss';

export default class BoardHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      boardTitle: ''
    };

    this.setTitle = this.setTitle.bind(this);
  }

  setTitle = () => {
    var _nodeOfTitle = ReactDOM.findDOMNode(this.titleRef);
    localStorage.setItem('boardTitle', _nodeOfTitle.value);
  };

  render() {
    return (
      <section id="boardHeader" className={style.boardheader}>
        <textarea
          spellCheck="false"
          maxLength="50"
          ref={(node) => {
            this.titleRef = node;
          }}
          onChange={() => this.setTitle()}
          placeholder="Название доски"
        >
          {this.props.boardTitle}
        </textarea>
      </section>
    );
  }
}
