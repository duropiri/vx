export async function getStaticProps() {
    const placeId = 'your_place_id_here';
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    let reviews = [];
  
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
      );
      const data = await response.json();
      reviews = data.result.reviews || [];
    } catch (error) {
      console.error('Error fetching Google Reviews:', error);
    }
  
    return {
      props: {
        reviews,
      },
      revalidate: 86400, // Revalidate every 24 hours
    };
  }
  