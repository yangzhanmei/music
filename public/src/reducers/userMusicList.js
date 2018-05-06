export default (state = [], action) => {
    if (action.type === "GETMUSICLIST") {

        return action.data;
    }

    return state;
}