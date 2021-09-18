import { useReducer, useCallback } from 'react';


interface ActionInterface<T> {
    type: string,
    args: Partial<T>
}

const useCreateState = <T>(initialArgs: T): [T, (args: Partial<T>) => void] => {
    const reducer = (defaultState: T, action: ActionInterface<T>) => {
        const modifyState = (args: Partial<T>) => {
            const newState = { ...defaultState, ...args };
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

    const setState = useCallback((args: Partial<T>) => {
        dispatch({
            type: 'SET_STATE',
            args
        })
    }, []);

    return [state, setState];
}

export default useCreateState;