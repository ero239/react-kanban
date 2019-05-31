import React, {PureComponent} from 'react';

import style from './style.scss';

export default class PopUp extends PureComponent {
  render() {
    return (
      <section id="popup" className={style.popup}>
        <div className={style.popupInner}>
          <div className={style.popupInnerHeader}>
            <p>Удаление списка</p>
            <img
              onClick={() => this.deleteList()}
              src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDcuOTcxIDQ3Ljk3MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuOTcxIDQ3Ljk3MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yOC4yMjgsMjMuOTg2TDQ3LjA5Miw1LjEyMmMxLjE3Mi0xLjE3MSwxLjE3Mi0zLjA3MSwwLTQuMjQyYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBMMjMuOTg2LDE5Ljc0NEw1LjEyMSwwLjg4ICAgYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDJsMTguODY1LDE4Ljg2NEwwLjg3OSw0Mi44NWMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0MiAgIEMxLjQ2NSw0Ny42NzcsMi4yMzMsNDcuOTcsMyw0Ny45N3MxLjUzNS0wLjI5MywyLjEyMS0wLjg3OWwxOC44NjUtMTguODY0TDQyLjg1LDQ3LjA5MWMwLjU4NiwwLjU4NiwxLjM1NCwwLjg3OSwyLjEyMSwwLjg3OSAgIHMxLjUzNS0wLjI5MywyLjEyMS0wLjg3OWMxLjE3Mi0xLjE3MSwxLjE3Mi0zLjA3MSwwLTQuMjQyTDI4LjIyOCwyMy45ODZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM2RThGQjUiIGRhdGEtb2xkX2NvbG9yPSIjNmU4ZmI1Ij48L3BhdGg+CjwvZz48L2c+IDwvc3ZnPg=="
            />
          </div>
          <div className={style.popupInnerText}>
            <p>Вы действительно хотите удалить список из ленты?</p>
          </div>
          <div className={style.popupInnerButtons}>
            <button>Удалить</button>
            <button>Отмена</button>
          </div>
        </div>
      </section>
    );
  }
}
