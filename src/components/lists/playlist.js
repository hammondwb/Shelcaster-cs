
import PlaylistItem from './list-item';
const tracknames = ["Therefor I am", "Push"];

function PlayList(props) {
    return <ul id="playlist"><PlaylistItem tracknames={tracknames} /></ul>
}

export default PlayList;