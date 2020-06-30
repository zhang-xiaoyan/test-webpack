import { assign } from "../common/untils";

const initialState = {
    listText: 'index'
};

const list = (state = initialState, action) =>{
    switch (action.type) {
        case 'change_text':
            return assign(state, {
                listText: action.listText
            })
        default:
            return state;
    }
}

export default list;