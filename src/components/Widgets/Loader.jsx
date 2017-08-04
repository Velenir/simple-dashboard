import React, { PureComponent } from 'react';

const Error = ({ children }) => (
  <p style={{ padding: '2em', textAlign: 'center' }}>
    Error: {children}
  </p>
);

class Loader extends PureComponent {
  componentDidMount() {
    this.props.load && this.props.load();
  }
  render() {
    const { loaded, load, error, component: Component, ...rest } = this.props;

    if (error) return <Error>{error.message}</Error>;

    return loaded && <Component {...rest} />;
  }
}

export default Loader;
