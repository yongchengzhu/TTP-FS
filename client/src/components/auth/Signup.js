import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { signup } from '../../actions';

class Signup extends React.Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Name</label>
          <Field name="name" type="text" component="input" autoComplete="off" />
        </fieldset>        
        <fieldset>
          <label>Email</label>
          <Field name="email" type="text" component="input" autoComplete="off" />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password"  component="input" autoComplete="off" />
        </fieldset>
        <div>
          {this.props.errorMessage}
        </div>
        <button>Sign Up</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

// export default reduxForm({ form: 'signup' })(Signup);
export default compose(
  connect(mapStateToProps, {signup: signup}),
  reduxForm({ form: 'signup' })
)(Signup);