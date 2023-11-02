import React from 'react';

const NewsItem = (props) => {
  const {
    title,
    description,
    imageUrl,
    url,
    mode,
    btn,
    author,
    date,
    source,
    badgeColor,
  } = props;

  return (
    <div className='my-5' mode={mode} btn={btn}>
      <span className={`badge rounded-pill ${badgeColor}`} style={{ right: "90%", zIndex: '1' }}>{source}</span>
      <div className="card">
        <img
          src={imageUrl}
          onError={(e) => {
            e.target.src = " https://th-i.thgim.com/public/incoming/zcy079/article67352816.ece/alternates/LANDSCAPE_1200/9869_30_6_2023_15_12_32_1_CB01TISSUEPAPER2.JPG"; // Replace with your placeholder image URL
          }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              <b> By: {author ? author : "Unknown"}</b> on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
