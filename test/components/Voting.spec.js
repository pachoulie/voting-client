import React from 'react';
import { shallow, mount } from 'enzyme';
import { List } from 'immutable';
import { Voting } from '../../src/components/Voting';
import Vote from '../../src/components/Vote';
import Winner from '../../src/components/Winner';
import { expect } from 'chai';

describe('Voting', () => {
    it('renders Vote when there is a pair', () => {
        const wrapper = shallow(<Voting pair={['Trainspotting', '28 Days Later']}/>);

        expect(wrapper.find(Vote).length).to.equal(1);
    });

    it('renders Winner when there is one', () => {
        const wrapper = shallow(<Voting winner="Trainspotting"/>);

        expect(wrapper.find(Vote).length).to.equal(0);
        expect(wrapper.find(Winner).length).to.equal(1);
    });

    it('renders as a pure component', () => {
        const pair = List.of('Trainspotting', '28 Days Later');
        let wrapper = mount(
            <div>
                <Vote pair={pair} />
            </div>
        );

        expect(wrapper.find('RaisedButton').at(0).text()).to.equal('Trainspotting');

        pair[0] = 'Sunshine';
        wrapper = mount(
            <div>
                <Vote pair={pair} />
            </div>
        );

        expect(wrapper.find('RaisedButton').at(0).text()).to.equal('Trainspotting');
    });
});