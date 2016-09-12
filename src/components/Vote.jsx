import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    getPair() {
        return this.props.pair || [];
    }

    isDisabled() {
        return !!this.props.hasVoted;
    }

    hasVotedFor(entry) {
        return this.props.hasVoted === entry;
    }

    render() {
        return (
            <div className="voting">
                {this.getPair().map(entry =>
                    <button key={entry}
                            onClick={() => this.props.vote(entry)}
                            disabled={this.isDisabled()}>
                        <h1>{entry}</h1>
                        {this.hasVotedFor(entry) ?
                            <div className="voted">Voted</div>
                            : null}
                    </button>
                )}
            </div>
        );
    }
}