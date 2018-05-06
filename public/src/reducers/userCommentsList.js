export default (state = [], action) => {
    if (action.type === "GETCOMMENTSLIST") {

        return action.data;
    }

    return state;
}