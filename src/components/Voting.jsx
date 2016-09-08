import React from 'react';
import PureRenderMixins from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
    mixins: PureRenderMixins,
    render: function () {
        return <div>
            {this.props.winner ?
                <Winner ref="winner" winner={this.props.winner}/> :
                <Vote {...this.props}/>
            }
        </div>;
    }
});