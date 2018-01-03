export default (state = "", action) => {
    if (action.type === "LOGIN") {

        return action.information;
    }

    return state;
}