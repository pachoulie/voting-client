import React from 'react';
import PureRenderMixins from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: PureRenderMixins,
    getPair: function () {
        return this.props.pair || [];
    },
    isDisabled: function () {
        return !!this.props.hasVoted;
    },
    hasVotedFor: function (entry) {
        return this.props.hasVoted === entry;
    },
    render: function () {
        return <div className="voting">
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
        </div>;
    }
});