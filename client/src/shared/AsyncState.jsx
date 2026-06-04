import CircleLoading from "./Loading/CircleLoading";
import ErrorMessage from "./ErrorMessage";
import EmptyState from "./EmptyState";

export default function AsyncState({
  loading,
  error,
  isEmpty,
  emptyMessage = "موردی یافت نشد.",
  children,
  className = "",
}) {
  if (loading) {
    return <CircleLoading />;
  }

  if (error) {
    return (
      <div className={className}>
        <ErrorMessage message={error} />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className={className}>
        <EmptyState message={emptyMessage} />
      </div>
    );
  }

  return children;
}
