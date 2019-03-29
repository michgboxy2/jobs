import _ from 'lodash';
import {REHYDRATE} from 'redux-persist/constants';
import {
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from '../actions/types';


export default function(state = [], action){
    switch(action.type) {
        case REHYDRATE:
            return action.payload.likedJobs || []; //redux persist offline data cache
        case CLEAR_LIKED_JOBS : {
            return []; //clears the state object as set it as empty
        }


        case LIKE_JOB:
            return _.unionBy([ 
                action.payload, ...state
            ], 'jobkey');

        default:
            return state;

    }
}