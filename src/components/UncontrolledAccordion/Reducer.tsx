type ActionType={
    type: string
}
type StateType={
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            const stateCopy = {...state, collapsed: !state.collapsed}
            return  stateCopy
        default:
            return state
    }
    //    if (action.type==='TOGGLE-COLLAPSED'){
    //        return !state
    //    }
    // return state
}