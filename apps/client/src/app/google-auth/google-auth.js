import './google-auth.module.scss';
import { Component } from 'react';
import { connect } from 'react-redux';
import { signInAction, signOutAction } from '../../_data/actions';

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '612078120797-kvr79ct8t60f1196gdi8ddvcq0pcabga.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
    this.onAuthChange(this.props.isSignedIn);
  }

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signInAction(this.auth.currentUser.get().getId());
    } else {
      this.props.signOutAction();
    }
  }

  renderLoginButton() {
    if (this.props.isSignedIn) {
      return <button className='ui red google button' onClick={this.onSignOut}>
        <i className='google icon'></i>
        Sign Out
      </button>
    } else {
      return <button className='ui red google button' onClick={this.onSignIn}>
      <i className='google icon'></i>
      Sign In with Google
    </button>
    }
  }
  render() {
    return (
      <div>
        <p>{this.renderLoginButton()}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('the state now is ', state);
  return {isSignedIn: state.auth.isSignedIn};
}
export default connect(mapStateToProps, {signInAction, signOutAction})(GoogleAuth);
