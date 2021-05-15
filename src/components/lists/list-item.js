function PlaylistItem(props) {
    const trackNames = props.tracknames;
    const trackList = trackNames.map((trackName) => <li>{trackName}</li>);
}

export default PlaylistItem;