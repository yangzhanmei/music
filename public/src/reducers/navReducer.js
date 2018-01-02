import Routers from '../routers/router';

const navReducer = (state, action) => {
    const newState = Routers.router.getStateForAction(action, state);

    return newState || state;
};

export default navReducer;