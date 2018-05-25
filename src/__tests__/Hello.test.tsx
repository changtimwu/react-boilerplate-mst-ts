import * as React from 'react'
import { shallow } from 'enzyme'

class Hello extends React.Component {
    render() {
        return <h1>Hello!</h1>;
    }
}
it('renders the heading', () => {
    const result = shallow(<Hello />).contains(<h1>Hello!</h1>);
    expect(result).toBeTruthy();
});
