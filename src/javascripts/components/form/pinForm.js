import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

const pinForm = (user) => {
  $('#pin-form').html(`<h2>Add A Pin</h2>
    <div id="success-message"></div>
    <form>
      <div id="error-message"></div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Example: Favorite Crag, Recipe, Art, etc">
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="text" class="form-control" id="image" placeholder="Copy Image Address Here">
      </div>
      <div class="form-group">
      <label for="URL">URL Address</label>
      <input type="text" class="form-control" id="website" placeholder="Url">
    </div>
      <div class="form-group">
        <label for="user">User</label>
          <select class="form-control" id="board">
            <option value="">Select a Board</option>
          </select>
      </div>
      <button id="add-board-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Add Pin</button>
    </form>`);

  boardData.getBoards(user).then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value="${item.uid}">${item.name}</option>`);
    });
  });
  $('#add-board-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      name: $('#name').val() || false,
      image: $('#image').val() || false,
      url: $('#website').val() || false,
      boardUid: $('#board').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      pinData
        .addPin(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Board Was Added!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#succes-message').html('');
      }, 3000);
      $('#image').val('');
      $('#name').val('');
      $('#website').val('');
      $('#board').val('');
    }
  });
};

export default { pinForm };
