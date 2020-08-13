import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be false', () => {
    //data
const state: StateType = {
    collapsed: true
}
    //action
expect (() => {
    reducer(state, {type: FAKE})
}).toThrowError()
    //expection
})