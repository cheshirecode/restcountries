/** @jsx jsx */
import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { jsx, Alert } from 'theme-ui';
// nearly impossible to reliably test unless throwing errors explicitly inside component tree
/* c8 ignore next 50 */
export default class ErrorBoundary extends Component<Record<string, unknown>, { error: Error; errorInfo: ErrorInfo }> {
  constructor(props: Record<string, unknown>) {
    super(props);
    // @ts-expect-error initially must be null
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch: (error: Error, errorInfo: ErrorInfo) => void = (error, errorInfo) => {
    this.setState({
      error,
      errorInfo,
    });
  };

  render: () => ReactNode = () => {
    if (this.state.errorInfo) {
      return import.meta.env.NODE_ENV === 'development' ? (
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      ) : (
        <Alert variant="highlight" mb={2}>
          {this.state.error.toString()}
        </Alert>
      );
    }
    // Normally, just render children
    return this.props.children;
  };
}
