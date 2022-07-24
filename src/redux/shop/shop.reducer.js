import ShopActionsType from './shop.types';

const INITIAL_STATE = {
  collections: [
    {
      id: 1,
      name: 'Brinco de Argola Melinda G Zircônias Coloridas Folheado A Ouro 18K',
      category: 'Brincos',
      description: '',
      quantity: null,
      imageUrl: 'https://bucketfree-images.s3.us-east-2.amazonaws.com/uploads/images/1/chokers.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXL2VR5LY5WTYAJPX%2F20220723%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220723T002640Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a74d4f28af65d59cf15a8dc4a2920ae9297f2a7b8c82b40a5a9a59fc53226639',
      price: 19.90,
    },
  ],
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsType.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionsType.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case ShopActionsType.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
