import React from 'react';
import PureRenderMixins from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: PureRenderMixins,
    render: function () {
        return <div className="winner">
            Winner is {this.props.winner}
        </div>;
    }
});