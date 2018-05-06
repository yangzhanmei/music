export default (state = {data: {}}, action) => {
    if (action.type === "GETMUSICINFORMATION") {

        return action.data;
    }
    if (action.type === "COMMENTMUSIC") {
        const data = {...this.state.data, isSuccess: action.isSuccess};
        console.log(data);
        return data;
    }

    return state;
}