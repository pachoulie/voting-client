import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles = {
    button: {
        height: 300
    }
};

export default class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    getChildContext() {
        return {muiTheme: getMuiTheme()};
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
            <Grid className="voting">
                <Row>
                    {this.getPair().map(entry =>
                        <Col xs={6} key={entry} className="button">
                            <RaisedButton label={this.getLabel(entry)}
                                          fullWidth={true}
                                          onClick={() => this.props.vote(entry)}
                                          disabled={this.isDisabled()}
                                          style={styles.button}>
                            </RaisedButton>
                        </Col>
                    )}
                </Row>
            </Grid>
        );
    }
}

Vote.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};