import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import RaisedButton from 'material-ui/RaisedButton';
const {Grid, Row, Col} = require('react-flexbox-grid');

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

    getLabel(entry) {
        return (this.props.hasVoted === entry ? 'Voted' : entry);
    }

    render() {
        return (
            <Grid className="voting" style="flex-grow">
                <Row>
                    {this.getPair().map(entry =>
                        <Col xs={6} key={entry}>
                            <RaisedButton label={this.getLabel(entry)}
                                          fullWidth={true}
                                          onClick={() => this.props.vote(entry)}
                                          disabled={this.isDisabled()}>
                            </RaisedButton>
                        </Col>
                    )}
                </Row>
            </Grid>
        );
    }
}