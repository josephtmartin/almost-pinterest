import pins from '../../helpers/data/pinData';
import pinMaker from '../cards/pinCard';

const displayPins = () => {
  $('body').on('click', '.see-pins', (e) => {
    e.stopImmediatePropagation();
    $('#app').html('');
    pins.getPinBoards(e.currentTarget.id).then((response) => {
      const newObject = response;
      const newArray = [];
      Object.keys(newObject).forEach((item) => {
        newArray.push(newObject[item]);
      });
      newArray.forEach((item) => {
        $('#app').append(pinMaker.pinMaker(item));
      });
    });
  });
};

export default { displayPins };
