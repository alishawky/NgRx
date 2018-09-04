import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionType {
    ToogleProductCode = '[Product] Toogle Product Code',
    SetCurrentProduct = '[Product] Set Product Product',
    ClearCurrentProduct = '[Product] Clear Product Product',
    InitializeCurrentProduct = '[Product] Initialize Product Product',
    Load = '[Product] Load',
    LoadSuccess = '[Product] LoadSuccess',
    LoadFail = '[Product] LoadFail'
}


export class ToggleProductCode implements Action {
    readonly type = ProductActionType.ToogleProductCode;

    constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionType.SetCurrentProduct;

    constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionType.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionType.InitializeCurrentProduct;
}

export class Load implements Action {
    readonly type = ProductActionType.Load;
}

export class LoadSuccess implements Action {
    readonly type = ProductActionType.LoadSuccess;

    constructor(public payload: Product[]) { }
}

export class LoadFail implements Action {
    readonly type = ProductActionType.LoadFail;

    constructor(public payload: string) { }
}

export type ProductActions = ToggleProductCode
    | SetCurrentProduct
    | ClearCurrentProduct
    | InitializeCurrentProduct
    | Load
    | LoadSuccess
    | LoadFail;
