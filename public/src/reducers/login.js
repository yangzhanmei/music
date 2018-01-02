export default (state = "", action) => {
    if (action.type === "SHOWHELLO") {

        return action.value;
    }

    return state;
}