import React from 'react';

export default function Book() {
  return (
    <div className="bookCard">
      <div className="bookInfo">
        <p className="genre">genre</p>
        <p className="title">title</p>
        <p className="author">author</p>
        <ul>
          <li><button type="button">Comments</button></li>
          <li><button type="button">Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className="progress">
        <div>
          <div>chart</div>
          <p>percentage</p>
        </div>
        <div>
          <p>status</p>
          <p>CURRENT CHAPTER</p>
          <p>Chapter number</p>
          <button type="button">Update progress</button>
        </div>
      </div>
    </div>
  );
}
