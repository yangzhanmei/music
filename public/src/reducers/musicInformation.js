export default (state = {data: {}}, action) => {
    if (action.type === "GETMUSICINFORMATION") {

        return action.data;
    }

    return state;
}