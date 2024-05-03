import { getDatabase, ref, child, get } from 'firebase/database';
import { setNannies } from '../redux/slices/nanniesData';

export const getNanniesData = async dispatch => {
  try {
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, 'nannies'));

    dispatch(setNannies(data.val()));
  } catch (error) {
    console.log(error.message);
  }
};
