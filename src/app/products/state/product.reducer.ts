import { Product } from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductActionType } from './product.actions';


export interface State extends fromRoot.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: false,
  currentProduct: null,
  products: []
};

const getProductFeatuerState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatuerState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatuerState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatuerState,
  state => state.products
);

export function reducer(state: ProductState = initialState, action: ProductActions): ProductState {
  switch (action.type) {

    case ProductActionType.ToogleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };

      case ProductActionType.SetCurrentProduct:
      return {
        ...state,
        currentProduct: action.payload
      };

      case ProductActionType.ClearCurrentProduct:
      return {
        ...state,
        currentProduct: null
      };

      case ProductActionType.InitializeCurrentProduct:
      return {
        ...state,
        currentProduct: {
          id: 0,
          productName: '',
          productCode: 'New',
          description: '',
          starRating: 0
        }
      };

    default:
      return state;
  }
}
