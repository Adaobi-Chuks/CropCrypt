import axios from "axios";

export async function getXDetails(url: string) {
    const id = (url.match(/status\/(\d+)/) || [])[1] || null;


    const options = {
        method: 'GET',
        url: 'https://twitter154.p.rapidapi.com/tweet/details',
        params: {
            tweet_id: id
        },
        headers: {
            'x-rapidapi-key': '5d840197b3msh4526b840a6b5f15p18bc4ejsn04e88ba7d7ae',
            'x-rapidapi-host': 'twitter154.p.rapidapi.com'
        }
    };

    const { data } = await axios.request(options);

    return {
        likes: data.favorite_count,
        comments: data.reply_count
    };
}