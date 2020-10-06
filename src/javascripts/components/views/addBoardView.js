import form from '../form/boardForm';

const addBoardView = () => {
  $('#app').html('<div id="board-form">Board Form Here</div>');
  form.boardForm();
};

export default { addBoardView };
