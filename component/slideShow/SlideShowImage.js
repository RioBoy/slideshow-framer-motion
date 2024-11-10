const SlideShowImage = ({ images = [] }) => {
  return (
    <div className="slides">
      {images.map((vm, idx) => {
        return (
          <div className={'slide' + (idx === 0 ? ' current' : '')} key={idx}>
            <img
              src={vm.image.thumbnail}
              alt={vm.title}
              className="slide-image"
            />

            <div className="img-linear-background" />

            <div className="container">
              <div className="row">
                <div className="col-md-6 position-static">
                  <div className="slide-text-wrapper">
                    <h1 className="mb-0">{vm.title}</h1>

                    <div className="slide-text-desc my-5">
                      <h5 className="mb-4">{vm.descriptionOne}</h5>
                      <h5 className="description-two mb-0">
                        {vm.descriptionTwo}
                      </h5>
                    </div>

                    <button className="btn btn-primary">{vm.linkName}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SlideShowImage;
