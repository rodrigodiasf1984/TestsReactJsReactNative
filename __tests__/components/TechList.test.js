import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TechList from '~/components/TechList';
import {useSelector, useDispatch} from 'react-redux';
import {addTech} from '~/store/modules/techs/actions';
jest.mock('react-redux');

describe('TechList component', () => {
  it('should be able to render the tech list', () => {
    useSelector.mockImplementation(cb => cb({
      techs:['Node.js', 'ReactJS']
    }));

    const {getByTestId, getByText}=render(<TechList/>);

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
  });

  it('should be able to add a tech with redux', ()=>{
    const {getByTestId, getByLabelText} = render(<TechList/>);
    const dispatch=jest.fn();
    useDispatch.mockReturnValue(dispatch);
    fireEvent.change(getByLabelText('Tech'), {target:{value: 'Node.js'}});
    fireEvent.submit(getByTestId('tech-form'));
    expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'));
  });

});
