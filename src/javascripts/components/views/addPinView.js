import form from '../form/pinForm';

const addPinView = (user) => {
  $('#app').html('<div class="forms" id="pin-form"></div>');
  form.pinForm(user);
};

export default { addPinView };
