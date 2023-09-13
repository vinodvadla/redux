const initialState={
    name:"vinod",
    score:1
}

const FirstReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case "Increment":return {...state,score:state.score+1}
        case "Decrement":return {...state,score:state.score-1}
        default:return state;
    }
}
export default FirstReducer