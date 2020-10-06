import deletePin from '../../helpers/data/pinData';

const pinMaker = (object) => {
  const domString = `<div class="card grow" id="${object.uid}">
  <a href="${object.url}" id="${object.uid}" class="btn btn-info see-pins">Visit Site</a>
    <a  href="${object.url}"><div class="img-container card-body" style="background-image: url(${object.image})">
    </div></a>
    <h3 class="pin-title" style="color: black">${object.name}</h3>
    <button id="${object.uid}" class="btn btn-outline-warning update-pin-btn">Update Pin</button>
    <button id="${object.uid}" class="btn btn-danger delete-pin"><i id="pin-icon" class="far fa-trash-alt"></i>Delete Pin</button>
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
