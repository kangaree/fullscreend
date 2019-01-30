export const selectShow = ({ shows }, showId) => {
    return shows[showId] || { reviewIds: [] };
};

export const selectReviewsForShow = ({ shows, reviews }, show) => {
    return show.reviewIds.map(reviewId => reviews[reviewId]);
};

export const asArray = ({ shows }) => (
    Object.keys(shows).map(key => shows[key])
);