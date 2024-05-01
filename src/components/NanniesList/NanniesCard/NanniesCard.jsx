import React from 'react';
import { useState } from 'react';
import { StyledCard } from './NanniesCard.styled';
import { ReactComponent as IconHeart } from '../../../images/icon/heart.svg';
import { ReactComponent as IconLocation } from '../../../images/icon/location.svg';
import { ReactComponent as IconStar } from '../../../images/icon/star.svg';
import { Reviews } from './Reviews/Reviews';

export const NanniesCard = ({ nanny }) => {
  const {
    about,
    avatar_url,
    birthday,
    characters,
    education,
    experience,
    kids_age,
    location,
    name,
    price_per_hour,
    rating,
    reviews,
  } = nanny;

  const [visibleReviews, setVisibleReviews] = useState(false);
  const [iSFavorite, setIsFavorite] = useState(false);

  const age = new Date().getFullYear() - new Date(birthday).getFullYear();

  const handleClickFavorite = () => {
    setIsFavorite(!iSFavorite);
  };

  return (
    <StyledCard>
      <div className="wrapperImg">
        <span className="isOnline"></span>
        <img src={avatar_url} alt="avatar" width={96} height={96} />
      </div>
      <div className="nanniesInfo">
        <div className="nanniesInfoHeader">
          <div className="wrapperTitle">
            <p>Nanny</p>
            <h2 className="title">{name}</h2>
          </div>
          <div className="wrapperInfoHeader">
            <ul className="headerInfoList">
              <li className="headerInfoItem">
                <IconLocation /> {location}
              </li>
              <li className="headerInfoItem">
                <IconStar /> Rating: {rating}
              </li>
              <li className="headerInfoItem">
                Price / 1 hour: <span>{price_per_hour}$</span>
              </li>
            </ul>
            <button
              onClick={handleClickFavorite}
              className="heartBtn"
              type="button"
            >
              <IconHeart className={iSFavorite ? 'isFavorite' : ''} />
            </button>
          </div>
        </div>
        <div className="nanniesInfoMain">
          <ul className="infoMainList">
            <li className="infoMainItem">
              Age: <span className="age">{age}</span>
            </li>
            <li className="infoMainItem">
              Experience: <span>{experience}</span>
            </li>
            <li className="infoMainItem">
              Kids Age: <span>{kids_age}</span>
            </li>
            <li className="infoMainItem">
              Characters: <span>{characters}</span>
            </li>
            <li className="infoMainItem">
              Education: <span>{education}</span>
            </li>
          </ul>
          <p className="about">{about}</p>
        </div>

        {visibleReviews ? (
          <>
            <Reviews reviews={reviews} />
            <button className="makeBtn" type="button">
              Make an appointment
            </button>
          </>
        ) : (
          <button
            className="readMoreBtn"
            onClick={() => setVisibleReviews(true)}
            type="button"
          >
            Read more
          </button>
        )}
      </div>
    </StyledCard>
  );
};
