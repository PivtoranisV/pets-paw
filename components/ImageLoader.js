const ImageLoader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <p className="text-base font-medium tracking-[2px] text-primary text-center mb-3">
        Cat image is loading...
      </p>
    );
  }

  return null;
};

export default ImageLoader;
