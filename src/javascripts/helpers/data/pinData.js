import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinBoards = (boardUid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/pins.json?orderBy="boardUid"&equalTo="${boardUid}"`)
    .then((response) => {
      const pinBoards = response.data;
      const pins = [];
      if (pinBoards) {
        Object.keys(pinBoards).forEach((item) => {
          pins.push(pinBoards[item]);
        });
      }
      resolve(pins);
    })
    .catch((error) => reject(error));
});

const addPin = (data) => axios.post(`${baseUrl}/pins.json`, data).then((response) => {
  const update = { uid: response.data.name };
  axios
    .patch(`${baseUrl}/pins/${response.data.name}.json`, update)
    .catch((error) => console.warn(error));
});
const getSinglePin = (pinUid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/pins/${pinUid}.json`)
    .then((response) => {
      const thisPin = response.data;
      resolve(thisPin);
    })
    .catch((error) => reject(error));
});

const deletePin = (pinUid) => axios.delete(`${baseUrl}/pins/${pinUid}.json`);

const updatePin = (uid, dataObject) => axios.patch(`${baseUrl}/pins/${uid}.json`, dataObject);

export default {
  getPinBoards,
  addPin,
  getSinglePin,
  deletePin,
  updatePin
};
