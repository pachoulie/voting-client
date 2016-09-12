import React from 'react';
import PureRenderMixins from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../actionCreators';

export const Voting = React.createClass({
    mixins: [PureRenderMixins],
    render: function () {
        return <div>
            {this.props.winner ?
                <Winner ref="winner" winner={this.props.winner}/> :
                <Vote {...this.props}/>
            }
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        hasVoted: state.get('hasVoted'),
        winner: state.getIn('winner')
    }
}

export const VotingContainer = connect(
    mapStateToProps,
    actionCreators
)(Voting);