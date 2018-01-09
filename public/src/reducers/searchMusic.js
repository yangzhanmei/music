export default (state = "", action) => {
    if (action.type === "GETMUSIC") {

        return action.musicList;
    }

    return state;
}