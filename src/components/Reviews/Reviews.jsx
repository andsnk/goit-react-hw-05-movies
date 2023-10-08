import { getMovieReview } from 'api/api';
import Loader from 'components/Loader/Loader';
import css from './Reviews.module.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchReviewData() {
      try {
        setIsLoading(true);
        setError('');
        const reviewsData = await getMovieReview(id);
        setReviews(reviewsData.results);
      } catch (error) {
        setError(error.message);
        Notiflix.Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviewData();
  }, [id]);
  return (
    <div className={css.reviewsWrap}>
      {isLoading && <Loader />}
      {error && { error }}
      <ul className={css.reviewsList}>
        {reviews.length === 0 ? (
          <p>We don’t have any reviews for this movie.</p>
        ) : (
          reviews.map(review => (
            <li key={review.id}>
              <h2 className={css.reviewsTitle}>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
