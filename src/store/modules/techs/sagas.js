import {call, put } from 'redux-saga/effects';
import api from '~/service/api';
import {getTechSuccess, getTechFailure} from './actions';
export function* getTechs(){
  try {
    const response = yield call(api.get, 'techs');
    console.log(response.data);
    yield put(getTechSuccess(response.data));
  } catch (error) {
    yield put(getTechFailure());
  }
}