const {useReducer, useCallback} = require('react');

const useCreateState = (initialArgs) => {
    const reducer = (defaultState, action) => {
        const modifyState = (args) => {
            const newState = Object.assign({}, defaultState);
            Object.assign(newState, args);
            return newState;
        }

        switch (action.type) {
            case 'SET_STATE':
                return modifyState(action.args);
            default:
                return defaultState;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialArgs);

    const setState = useCallback((args) => {
        dispatch({
            type: 'SET_STATE',
            args
        })
    }, []);

    return [state, setState];
}

module.exports = useCreateState;