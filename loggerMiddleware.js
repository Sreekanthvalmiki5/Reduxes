//store next actions
export const loggerMiddleware=(store)=>{
    return function(next){
        return function(action){
            console.log("[Log]"+action.type);
            next(action);// to call next actions in the pipe line
            console.log(store.getState());//log
        }
    }
}
