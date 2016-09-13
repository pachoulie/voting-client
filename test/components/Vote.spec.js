import React from 'react';
import { shallow, mount } from 'enzyme';
import Vote from '../../src/components/Vote';
import RaisedButton from 'material-ui/RaisedButton';
import { expect } from 'chai';

describe('Vote', () => {
    it('renders a pair of buttons', () => {
        const wrapper = mount(<Vote pair={['Trainspotting', '28 Days Later']}/>);

        expect(wrapper.find('RaisedButton').length).to.equal(2);
        expect(wrapper.find('RaisedButton').at(0).text()).to.equal('Trainspotting');
        expect(wrapper.find('RaisedButton').at(1).text()).to.equal('28 Days Later');
    });

    it('invokes callback when a button is clicked', () => {
        let votedWith = '';
        const vote = (entry) => votedWith = entry;

        const wrapper = shallow(<Vote pair={['Trainspotting', '28 Days Later']} vote={vote}/>);

        const button = wrapper.find('RaisedButton').at(0);

        button.simulate('click');

        expect(votedWith).to.equal('Trainspotting');
    });

    it('disables buttons when user has voted', () => {
        const wrapper = mount(
            <Vote pair={['Trainspotting', '28 Days Later']} hasVoted="Trainspotting"/>
        );

        expect(wrapper.find('RaisedButton').length).to.equal(2);
        expect(wrapper.find('RaisedButton').at(0).prop('disabled')).to.equal(true);
        expect(wrapper.find('RaisedButton').at(1).prop('disabled')).to.equal(true);
    });

    it('adds label on the voted entry', () => {
        const wrapper = mount(
            <Vote pair={['Trainspotting', '28 Days Later']} hasVoted="Trainspotting"/>
        );

        expect(wrapper.find('RaisedButton').length).to.equal(2);
        expect(wrapper.find('RaisedButton').at(0).text()).to.equal('Voted');
    });
});