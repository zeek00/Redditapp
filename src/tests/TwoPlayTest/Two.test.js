import Enzyme from 'enzyme';
import { EnzymeAdapter } from 'enzyme';

import * as myModule  from '../../playTests/first/Two';
import * as one from "../../playTests/first/One"

Enzyme.configure({adapter: new EnzymeAdapter()});

it('bar does what I want', () => {
  //const spy = jest.spyOn(myModule, 'foo').mockImplementation(() => { console.log('s');
  //});
  const oneSpy = jest.spyOn(one, 'a').mockImplementation(() => { console.log('oneSpy called ');
  });
  const secSpy = jest.spyOn(one, 'b').mockImplementation(() => { return 2;});
  const bazSpy = jest.spyOn(myModule, 'baz').mockImplementation(() => { return 4;});

//const r = myModule.bar()
  //expect(r).toBe(11);

  myModule.bar()
  //expect(spy).toHaveBeenCalled();
  expect(bazSpy).toHaveReturnedWith(4);
  expect(oneSpy).toHaveBeenCalled();
  expect(secSpy).toHaveBeenCalled();
  expect(secSpy).toHaveReturnedWith(2);
  secSpy.mockRestore();

  oneSpy.mockRestore();
});

it('baz does what I want', () => {
  const spy = jest.spyOn(myModule, 'foo').mockImplementation(() => undefined);

  //expect(myModule.baz()).toBe(50);
  //expect(spy).toBeCalled();

  spy.mockRestore();
});
