const loadReviews = () => {
    console.log("loading reviews");
    const container = document.querySelector("#reviews-list")
    for (const review of reviews) {
        const el = createReviewElement(review);
        container.appendChild(el);
    }
}
document.addEventListener("DOMContentLoaded", loadReviews);

const handleReviewSubmit = () => {
    console.log("handleReviewSubmit reviews");
}

const createReviewElement = (review) => {
    console.log(review);
    const reviewElement = document.createElement("div");
    reviewElement.className = "review-item";
    reviewElement.innerHTML =  `
    <p class = "book-title">${review.title}</p>
    <p>${review.reviewText}</p>
    <p>Rating: ${review.rating}</p>
    <button>Likes (${review.likes})</button>
    <button>Reposts (${review.reposts})</button>
    `;
    return reviewElement;
}

