import React, {PureComponent} from 'react';

import Board from '../../components/Board/Board.jsx';

import style from './style.scss';

export default class Kanban extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="kanban-layout" className={style.kanban}>
        <Board />
      </section>
    );
  }
}
