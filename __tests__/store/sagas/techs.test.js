import {runSaga} from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../../src/service/api';
import {getTechSuccess, getTechFailure} from '~/store/modules/techs/actions';
import {getTechs} from '~/store/modules/techs/sagas';

const apiMock = new MockAdapter(api);

describe('Techs saga', () => {
  it('should be able to fetch techs', async() =>{
    const dispatch= jest.fn();
    apiMock.onGet('techs').reply(200, ['Node.js']);    
    await runSaga({dispatch}, getTechs).toPromise();
    expect(dispatch).toHaveBeenCalledWith(getTechSuccess(['Node.js']));
  });

  it('should fail when the api return', async()=>{
    const dispatch = jest.fn();
    apiMock.onGet('techs').reply(500);
    await runSaga({dispatch}, getTechs).toPromise();
    expect(dispatch).toHaveBeenCalledWith(getTechFailure());
  })
});