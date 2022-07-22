export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6mmOgw1HsTUeuULw78v5sAJA6ayymzwG&q=${ category }&limit=20`; // URL

    const res = await fetch( url ); // Obtengo URL

    const {data} = await  res.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs);
}