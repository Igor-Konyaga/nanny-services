import React from 'react';
import { useState } from 'react';
import { MStyledCard } from './NanniesCard.styled';
import { ReactComponent as IconHeart } from '../../../images/icon/heart.svg';
import { ReactComponent as IconLocation } from '../../../images/icon/location.svg';
import { ReactComponent as IconStar } from '../../../images/icon/star.svg';
import { Reviews } from './Reviews/Reviews';
import { useDispatch } from 'react-redux';
import {
  addFavoriteNannies,
  deleteFavoriteNannies,
} from '../../../redux/slices/nanniesData';
import { variantsAnimCard } from 'services/animate';

export const NanniesCard = ({ nanny, isFavoriteNanny, index }) => {
  console.log(index);
  const dispatch = useDispatch();
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
  const [isFavorite, setIsFavorite] = useState(isFavoriteNanny);

  const age = new Date().getFullYear() - new Date(birthday).getFullYear();

  const newFavorite = JSON.parse(localStorage.getItem('favorites')) || [];

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      dispatch(addFavoriteNannies(nanny));

      localStorage.setItem(
        'favorites',
        JSON.stringify([...newFavorite, nanny])
      );
    } else {
      const arrFav = JSON.parse(localStorage.getItem('favorites'));

      const filterFav = arrFav.filter(fav => fav.name !== name);

      localStorage.setItem('favorites', JSON.stringify(filterFav));

      dispatch(deleteFavoriteNannies(name));
    }
  };

  return (
    <MStyledCard
      initial="hidden"
      animate="visible"
      variants={variantsAnimCard}
      custom={index}
    >
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
              <IconHeart className={isFavorite ? 'isFavorite' : ''} />
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
    </MStyledCard>
  );
};
