import React, {PureComponent} from 'react';

import style from './style.scss';

import {addNewList} from '../../actions.js';

export default class List extends PureComponent {
  constructor(props) {
    super(props);
    this.addList = this.addList.bind(this);
  }

  addList = () => {
    this.props.onAddNewList();
  };

  render() {
    return (
      <section id="list" className={style.addList}>
        <div onClick={() => this.addList()} className={style.addListWrapper}>
          <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzEuNDQ0IDMxLjQ0NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzEuNDQ0IDMxLjQ0NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBzdHlsZT0iZmlsbDojNkU4RkI1IiBkPSJNMS4xMTksMTYuODQxYy0wLjYxOSwwLTEuMTExLTAuNTA4LTEuMTExLTEuMTI3YzAtMC42MTksMC40OTItMS4xMTEsMS4xMTEtMS4xMTFoMTMuNDc1VjEuMTI3ICBDMTQuNTk1LDAuNTA4LDE1LjEwMywwLDE1LjcyMiwwYzAuNjE5LDAsMS4xMTEsMC41MDgsMS4xMTEsMS4xMjd2MTMuNDc2aDEzLjQ3NWMwLjYxOSwwLDEuMTI3LDAuNDkyLDEuMTI3LDEuMTExICBjMCwwLjYxOS0wLjUwOCwxLjEyNy0xLjEyNywxLjEyN0gxNi44MzN2MTMuNDc2YzAsMC42MTktMC40OTIsMS4xMjctMS4xMTEsMS4xMjdjLTAuNjE5LDAtMS4xMjctMC41MDgtMS4xMjctMS4xMjdWMTYuODQxSDEuMTE5eiIgZGF0YS1vcmlnaW5hbD0iIzFFMjAxRCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzZlOGZiNSI+PC9wYXRoPjwvZz4gPC9zdmc+" />
          <span>Добавить колонку</span>
        </div>
      </section>
    );
  }
}
