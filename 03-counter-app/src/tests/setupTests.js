import Enzyme from 'enzyme'

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { createSerializer } from 'ezyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }) );



