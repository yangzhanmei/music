import {combineReducers} from "redux";
import Login from './login';
import NavReducer from './navReducer';
import Register from './register';
import SearchMusic from './searchMusic';
import HomePage from './homePage';
import MusicInformation from './musicInformation';
import UserMusicList from './userMusicList';
import UserCommentsList from './userCommentsList';

export default combineReducers({
    NavReducer,
    Login,
    Register,
    SearchMusic,
    HomePage,
    MusicInformation,
    UserMusicList,
    UserCommentsList
})