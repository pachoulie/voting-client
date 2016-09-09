import React from 'react';

export default React.createClass({
    getPairs: function() {
        return this.props.pair || [];
    },
    getVotes: function(entry) {
      if (this.props.tally && this.props.tally.get(entry)) {
          return this.props.tally.get(entry);
      }
    },
    render: function() {
        return <div className="tally">
            {this.getPairs().map(entry =>
                <div key={entry} className="entry">
                    <h1>{entry}</h1>
                    <div className="voteCount">
                        {this.getVotes(entry)}
                    </div>
                </div>
            )}
        </div>
    }
});