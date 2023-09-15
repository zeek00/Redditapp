import {REACT_ELEMENT_TYPE} from 'shared/ReactSymbols';

export function isValidElement(object) {
    return (
      typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE
    );
  }