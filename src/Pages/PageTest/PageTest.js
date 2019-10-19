import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'

// Import Redux Actions
import { increment, decrement } from '../../Actions';

class PageTest extends React.Component {

    render() {
        return (
            <div>
                <h3>Current Value: {this.props.count}</h3> <br/>
                <Button primary onClick={()=>this.props.increment(1)}>Increase Value</Button>
                <Button secondary onClick={()=>this.props.decrement(1)}>Decrease Value</Button>
            </div>
        );
    }
}

// Maps all redux state to props of this component
const mapStateToProps = (state) => {
    return {
      count: state.counter
    }
};

// Maps all dispatches to props of this component
const mapDispatchToProps = () => {
  return {
      increment,
      decrement
  }
};

export default connect(mapStateToProps, mapDispatchToProps())(PageTest)