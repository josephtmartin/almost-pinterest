import boardData from '../../helpers/data/boardData';
import form from '../form/updateBoardForm';

const updateBoardView = (uid) => {
  $('#app').html('<div class="forms" id="update-board-form"></div>');
  boardData.getSingleBoard(uid).then((response) => {
    form.updateBoardForm(response);
  });
};
export default { updateBoardView };
