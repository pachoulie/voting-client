import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../actionCreators';

const style = {
    Card: {
        padding: '14px 24px 24px'
    }
};

export class Voting extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="VoteContainer">
                <Card style={style.Card}>
                    {this.props.winner ?
                        <Winner ref="winner" winner={this.props.winner}/> :
                        <Vote {...this.props}/>
                    }
                </Card>
            </div>
        );
    }
}

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