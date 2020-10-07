import pinData from '../../helpers/data/pinData';
import form from '../form/updatePinForm';

const updatePinView = (uid, userId) => {
  $('#app').html('<div class="forms" id="update-pin-form"></div>');
  pinData.getSinglePin(uid).then((response) => {
    form.updatePinForm(response, userId);
  });
};
export default { updatePinView };
