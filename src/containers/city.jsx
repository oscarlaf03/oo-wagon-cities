import React, { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {

    handleClick = () => {
        this.props.setActiveCity(this.props.city)

    }
    render () {
        return(
            <div onClick={this.handleClick} className='list-group-item' >
               {this.props.city.name} 
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {setActiveCity: setActiveCity},
        dispatch
    );
}

function mapStateToProps(state) {
    return { activeCity: state.activeCity };
}


export default connect(mapStateToProps, mapDispatchToProps) (City);
