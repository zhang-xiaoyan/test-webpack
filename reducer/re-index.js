import { assign } from "../common/untils";

const initialState = {
    indexText: 'index'
};

const index = (state = initialState, action) =>{
    switch (action.type) {
        case 'change_text':
            return assign(state, {
                indexText: action.indexText
            })
        default:
            return state;
    }
}

export default index;