"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCreateState = function (initialArgs) {
    var reducer = function (defaultState, action) {
        var modifyState = function (args) {
            var newState = __assign(__assign({}, defaultState), args);
            return newState;
        };
        switch (action.type) {
            case 'SET_STATE':
                return modifyState(action.args);
            default:
                return defaultState;
        }
    };
    var _a = (0, react_1.useReducer)(reducer, initialArgs), state = _a[0], dispatch = _a[1];
    var setState = (0, react_1.useCallback)(function (args) {
        dispatch({
            type: 'SET_STATE',
            args: args
        });
    }, []);
    return [state, setState];
};
exports.default = useCreateState;
