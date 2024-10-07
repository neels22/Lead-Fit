import { atomFamily } from 'recoil';

export const TODOS = [
  { id: 1, title: 'Go to Gym', description: 'Hit the gym from 7-9' },
  { id: 2, title: 'Go to eat', description: 'Eat' },
];

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: (id) => {
    return TODOS.find((x) => x.id === id);
  },
});


