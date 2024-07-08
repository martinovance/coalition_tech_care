import Api from '../utils/Api';

export const getPatients = async () => {
  try {
    const response = await Api.get('/data');

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
