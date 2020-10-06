import boardData from '../../helpers/data/boardData';
import boardCard from '../cards/boardCard';

const boardsView = (user) => {
  $('#app').html('');
  boardData.getBoards(user).then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(boardCard.boardMaker(item));
      });
    } else {
      $('.alert').html('<h1>No Boards</h1>');
    }
  });
};

export default { boardsView };
