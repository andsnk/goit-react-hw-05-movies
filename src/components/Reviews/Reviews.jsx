import { getMovieReview } from 'api/api';
// import Loader from 'components/Loader/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchReviewData() {
      try {
        // setIsLoading(true);
        setError('');
        const reviewsData = await getMovieReview(id);
        console.log(reviewsData.results);
        setReviews(reviewsData.results);
      } catch (error) {
        setError(error.message);
        console.error('Error:', error);
        // } finally {
        //   setIsLoading(false);
      }
    }
    fetchReviewData();
  }, [id]);
  return (
    <div>
      {/* {isLoading && <Loader />} */}
      {error && { error }}
      <ul>
        {reviews.length === 0 ? (
          <p>We don’t have any reviews for this movie.</p>
        ) : (
          reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
