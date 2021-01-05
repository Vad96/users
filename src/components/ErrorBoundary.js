import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasErorr: false };
  }

  static getDerivedStateFromError(error) {
    return { hasErorr: true };
  }

  render() {
    if (this.state.hasErorr) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
