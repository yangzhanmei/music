export default (state = {}, action) => {
    if (action.type === "SHOWHELLO") {

        return {hello: "Hello"}
    }

    return state;
}