import React, {Component} from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {    
    render () {

        if (this.props.activeCity){
            return(
                <div className='active-city'>
                    <h1>{this.props.activeCity.name}</h1>
                    <h3>{this.props.activeCity.address}</h3>
                    <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} />
                </div>
            )

        } else{
            return(
                <div className='active-city'>
                    <h1>Choose a City</h1>
                </div>
            )

        }
    }
}

function mapStateToProps(state) {
    return { activeCity: state.activeCity };
}

export default connect(mapStateToProps) (ActiveCity);