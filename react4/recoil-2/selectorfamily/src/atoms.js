import { atomFamily, selectorFamily } from 'recoil';
import axios from 'axios';

// AtomFamily with selectorFamily as the default value, without try-catch
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: 'todosAtomFamily/Default',
    get: (id) => async ({ get }) => {
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      return res.data.todo; // Assuming the response contains a `todo` object
    },
  }),
});
