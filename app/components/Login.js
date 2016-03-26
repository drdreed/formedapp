import React, {Component} from 'react';
import {History} from 'react-router';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind
class Login extends React.Component {
	handleClick(newRoute) {
		if (newRoute) {
			this.props.navChangeCallback(newRoute);
		}
	}
	goToStore(event) {
		event.preventDefault();
		// get the data from the input
		this.history.pushState(null, '/feed');
		// transition from <StorPicker/> to <App/>
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<form className="login">
							<h2>Login</h2>
							<fieldset className="form-group">
								<input type="text" className="form-control" placeholder="Email"/>
							</fieldset>
							<fieldset className="form-group">
								<input type="password" className="form-control" placeholder="Password"/>
							</fieldset>
							<fieldset className="form-group">
								<input type="submit" className="btn btn-primary btn-block" onClick={this.handleClick.bind(this, 'community')} />
							</fieldset>
							<p className="text-center"><a href="#" onClick={this.handleClick.bind(this, 'signup')}>Signup?</a></p>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

reactMixin.onClass(Login, History);

export default Login;