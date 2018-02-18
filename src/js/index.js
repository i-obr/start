import _ from 'lodash';
import module1 from './module1';
import module2 from './module2';


const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];

const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));

console.log(getPropertyAction('children'));
module1();
module2();
