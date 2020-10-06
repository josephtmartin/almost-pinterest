import deleteBoard from '../../helpers/data/boardData';
import displayPins from '../views/pinView';

const boardMaker = (board) => {
  const domString = `<div class="card" style="color: white" id="${board.uid}">
  <div class="img-container card-body" style="background-image: url(${board.image})">
  <div class="d-flex justify-content-center">
    <h3 class="card-title">${board.name}</h3>
  </div>
  <div class="card-body">
    <a href="#" id="${board.uid}" class="btn btn-info see-pins board-buttons"><i id="pin-icon" class="fas fa-thumbtack"></i> Pins</a>
    <button class="btn btn-warning update-board board-buttons" style="color: white" id="${board.uid}"><i class="fas fa-edit"></i> Update Board</button>
    <button id="${board.uid}" class="btn btn-danger delete-board board-buttons"><i id="pin-icon" class="far fa-trash-alt"></i> Delete Board </button>
  </div>
</div>`;
  $('body').on('click', '.delete-board', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    deleteBoard.deleteBoard(firebaseKey);
  });
  displayPins.displayPins();
  return domString;
};

export default { boardMaker };
