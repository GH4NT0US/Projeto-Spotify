import axios from "axios";

const URL = 'http://localhost:3001';

export async function fetchData() {
    const responseArtists = await axios.get(`${URL}/artists`);
    const responseSongs = await axios.get(`${URL}/songs`);

return {
    artistArray: responseArtists.data,
    songsArray: responseSongs.data,
};
}
