import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  test: string;
}

export const reducers: ActionReducerMap<any> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
