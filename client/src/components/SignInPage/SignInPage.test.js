import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SignInComponent } from './SignInPage';

configure({ adapter: new Adapter() });

describe('Sign In Page', () => {
  let subject;
  let mockLogin;

  beforeEach(() => {
    mockLogin = jest.fn();
    subject = shallow(<SignInComponent login={mockLogin} />);
  });

  it('Can Mount', () => {
    expect(subject).toHaveLength(1);
  });
});
