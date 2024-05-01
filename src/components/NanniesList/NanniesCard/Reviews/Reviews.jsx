import React from 'react';
import { StyledReviews } from './Reviews.styled';
import { ReactComponent as IconStar } from '../../../../images/icon/star.svg';

export const Reviews = ({ reviews }) => {
  //   const [reviews] = useOutletContext();

  return (
    <StyledReviews>
      <ul className="reviewsList">
        {reviews.map(({ comment, rating, reviewer }) => {
          const firstLetter = reviewer.split('')[0];

          return (
            <li key={reviewer} className="reviewsItem">
              <div className="wrapper">
                <div className="iconName">{firstLetter}</div>
                <div className="wrapperUserName">
                  <p className="userName">{reviewer} </p>
                  <div className="rating">
                    <IconStar />
                    {rating}
                  </div>
                </div>
              </div>
              <p className="comment">{comment}</p>
            </li>
          );
        })}
      </ul>
    </StyledReviews>
  );
};
