export { greet } from './greet';
export { worker } from './mocks/browser';
export { server } from './mocks/server';
export { store } from './redux/store';
export { dummy } from './redux/features/question';
export {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from './redux/hooks';
export { useGetIndicesQuery, useAddIndexMutation } from './redux/services/word';
