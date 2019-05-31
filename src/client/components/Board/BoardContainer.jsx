import {connect} from 'react-redux';
import Board from './Board.jsx';
import {addNewList, addNewCard, deleteList, deleteCard} from '../../actions.js';

const mapStateToProps = (state) => ({
  geod: state.geod
});

const mapDispatchToProps = {
  addNewList,
  addNewCard,
  deleteList,
  deleteCard
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default AppContainer;
