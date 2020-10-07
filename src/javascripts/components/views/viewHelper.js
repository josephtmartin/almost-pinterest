import boardsView from './boardView';
import addBoardView from './addBoardView';
import addPinView from './addPinView';
import updateBoard from './updateBoardView';
import updatePin from './updatePinView';

const viewHelper = (id, user, arg) => {
  $('#app').html('');
  switch (id) {
    case 'boards-link':
      return boardsView.boardsView(user);
    case 'add-board-link':
      return addBoardView.addBoardView();
    case 'add-pin-link':
      return addPinView.addPinView(user);
    case 'update-board-link':
      return updateBoard.updateBoardView(arg);
    case 'update-pin-link':
      return updatePin.updatePinView(arg, user);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, user) => {
  viewHelper(view, user);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id, user);
  });
  $('body').on('click', '.update-board', (e) => {
    const boardUid = e.currentTarget.id;
    viewHelper('update-board-link', user, boardUid);
  });
  $('body').on('click', '.update-pin-btn', (e) => {
    const pinUid = e.currentTarget.id;
    viewHelper('update-pin-link', user, pinUid);
  });
};

export default { viewListener };
