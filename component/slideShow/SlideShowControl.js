const SlideShowControl = ({
  actions = {
    prev: () => {},
    next: () => {},
  },
}) => {
  return (
    <div className="container">
      <div className="slideshow-control">
        <button
          className="btn btn-transparent text-white px-0"
          onClick={actions.prev}
        >
          Prev
        </button>

        <button
          className="btn btn-transparent text-white px-0"
          onClick={actions.next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SlideShowControl;
