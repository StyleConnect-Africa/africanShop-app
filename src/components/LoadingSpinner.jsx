const LoadingSpinner = () => {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-accent1 bg-opacity-80">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-light"></div>
      <div className="bg-accent1  rounded-lg p-4 mt-4">
        <p className="text-md font-bold text-white">
          Loading.....
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
