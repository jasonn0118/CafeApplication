import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function iceCreamContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numberOfIceCream}</h2>
            <button onClick={props.buyCake}>Buy Ice Cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfIceCream: state.iceCream.numberOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer)
