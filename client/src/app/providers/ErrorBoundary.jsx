import { Component } from "react";
import Button from "../../shared/components/buttons/button";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
          <div className="max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">مشکلی پیش آمد!</h1>
            <p className="text-gray-700 mb-6">
              متاسفانه یک خطا رخ داد. لطفاً صفحه را بارگذاری کنید.
            </p>
            <Button
              variant="danger"
              size="md"
              onClick={() => window.location.reload()}
              className="font-bold"
            >
              بارگذاری مجدد
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
