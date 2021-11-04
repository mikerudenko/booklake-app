import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// NOTE: at least one export is required when using CRA with TS
export default undefined;
