import boardsView from './boardView';
import addBoardView from './addBoardView';

const viewHelper = (id, user) => {
  $('#app').html('');
  switch (id) {
    case 'boards-link':
      return boardsView.boardsView(user);
    case 'add-board-link':
      return addBoardView.addBoardView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, user) => {
  viewHelper(view, user);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id, user);
  });
};

export default { viewListener };
