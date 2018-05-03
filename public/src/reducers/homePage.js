export default (state = {data: {}}, action) => {
    switch (action.type) {
        case 'COLLECTMUSIC':
            return action.data;
        case 'UNCOLLECTMUSIC':
            return action.data;
    }

    return state;
}