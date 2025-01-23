import { ReactGoogleReviews, dangerouslyFetchPlaceReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

/**
 * Example using NextJS server component
 */
async function ReviewsPage() {
  const placeId = "ChIJHfNaTQDDyIARYnbZ-V3-6ls"; // Google Place ID
  const apiKey = "AIzaSyARwTMbJsIVX7auz_Bg1Hpu3GpAiD70D3I"; // Google API Key

  // IMPORTANT: Only fetch reviews server-side to avoid exposing API key
  const reviews = await dangerouslyFetchPlaceReviews(placeId, apiKey)

  return (
    // Carousel and other layouts require wrapping ReactGoogleReviews in a client component
    <ReactGoogleReviews layout="badge" reviews={reviews} />
  );
}

export default ReviewsPage;