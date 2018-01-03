export default (state = "", action) => {
    if (action.type === "REGISTER") {

        return action.isSuccess;
    }

    return state;
}