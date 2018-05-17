import React, { Component } from 'react';
import { getUser } from '../../ducks/users';
import { connect } from 'react-redux';

class Private extends Component {

    componentDidMount() {
        this.props.getUser()
    }

    bankBalance() {
        return '$' + Math.floor((Math.random() + 1) * 1000) + '.00';
    }

    render() {
        let { user_name, img, auth_id } = this.props.user
        console.log(this.props)
        return (
            <div>
                <h2>Acount Information: </h2>
                <hr />
                {
                    this.props.user.user_name ?
                        <div>
                            <img src={img} alt="userImg" />
                            <p> Account Name:{user_name} </p>
                            <p>Accout Number: {auth_id}</p>
                            <p>Balance: {this.bankBalance()}</p>
                        </div>
                        : <p>Please Login</p>
                }
            </div>
        )
    }
}

function mapStateToProps({ user }) {
    return {
        user
    }
}

export default connect(mapStateToProps, { getUser })(Private)