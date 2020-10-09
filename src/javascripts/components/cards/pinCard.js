import deletePin from '../../helpers/data/pinData';

const pinMaker = (object) => {
  const domString = `<div class="card w-25 m-3" style="color: white" id="${object.uid}">
  <div class="img-container card-body" style="background-image: url(${object.image})">
  <div class="d-flex justify-content-center">
    <h3 class="card-title">${object.name}</h3>
  </div>
  <div class="card-body">
    <a href="${object.url}" id="${object.uid}" class="btn btn-info see-pins" target="_blank"><i class="fas fa-link"></i> Visit Site</a>
    <button id="${object.uid}" class="btn btn-warning update-pin-btn" style="color: white"><i class="fas fa-edit"></i> Update Pin</button>
    <button id="${object.uid}" class="btn btn-danger delete-pin"><i id="pin-icon" class="far fa-trash-alt"></i> Delete Pin</button>
  </div>
</div>`;
  $('body').on('click', '.delete-pin', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    deletePin.deletePin(firebaseKey);
  });
  return domString;
};

export default { pinMaker };
