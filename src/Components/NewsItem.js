import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div className="d-flex justify-content-end position-absolute top-0 end-0">
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://images.moneycontrol.com/static-mcnews/2023/11/Market_up1-770x433.jpeg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By{" "}
              <span style={{ fontWeight: "bold", color: "#9c0c0c" }}>
                {!author ? "Unknown" : author}
              </span>{" "}
              on{" "}
              <span style={{ color: "#9c0c0c", fontWeight: "bold" }}>
                {new Date(date).toGMTString()}
              </span>
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
