import axios from "axios";

export async function getInstagramDetails(url: string) {
    const id = (url.match(/\/p\/([^\/?]+)/) || [])[1] || null;

    const likesOptions = {
        method: 'GET',
        url: `https://instagram243.p.rapidapi.com/postlikes-new/${id}/12/%7Bend_cursor%7D`,
        headers: {
            'x-rapidapi-key': 'ca4c435548msh7f0ac0c59a0544bp14e220jsne5582a262ffd',
            'x-rapidapi-host': 'instagram243.p.rapidapi.com'
        }
    };

    const { data: likes } = await axios.request(likesOptions);

    const commentsOptions = {
        method: 'GET',
        url: `https://instagram243.p.rapidapi.com/postcomments/${id}/%7Bend_cursor%7D/%7Bscraperid%7D`,
        headers: {
            'x-rapidapi-key': 'ca4c435548msh7f0ac0c59a0544bp14e220jsne5582a262ffd',
            'x-rapidapi-host': 'instagram243.p.rapidapi.com'
        }
    }

    const { data: comments } = await axios.request(commentsOptions);

    return {
        likes: likes.data.likes.length,
        comments: comments.data.comments.length
    };
}