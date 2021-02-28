import { WISHLIST } from '../types';

const wistlist = []

export default function index(state = wistlist, action = null) {
  switch (action.type) {
    case WISHLIST:
      return { ...state, wistlist: action.payload };
    default:
      return state;
  }
}
