import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? (
      <main className="empty-state">
        <h1>Something went wrong.</h1>
        <p>Please reload the page to return to ESSRA.</p>
        <a className="button button--primary" href="/">
          Reload homepage
        </a>
      </main>
    ) : (
      this.props.children
    );
  }
}
