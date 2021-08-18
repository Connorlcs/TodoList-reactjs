const initialState = {
    inputValue: '',
    list: [
        // {
        //     description: '',
        //     categories: '',
        //     content: '',
        // }
    ]
}
const todoItem = (state = initialState, action) => {


    if(action.type === 'HANDLE_CHANGE') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type === 'ADD_ITEM') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }

    if(action.type === 'DELETE_ITEM') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    
    return state
}
export default todoItem