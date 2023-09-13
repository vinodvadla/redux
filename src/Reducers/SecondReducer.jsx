const initialState={
    name:"sairam",
    score:56
}

const SecondReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case "IncrementTwo":return {...state,score:state.score+1}
        case "DecrementTwo":return {...state,score:state.score-1}
        default:return state;
    }
}
export default SecondReducer