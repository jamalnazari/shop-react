export default function ErrorMessage({ message }) {
  return (
    <div className="h-screen flex justify-center items-center rounded-xl  border border-red-200 bg-red-50 px-4 py-3 text-center text-red-700">
      {message}
    </div>
  );
}
