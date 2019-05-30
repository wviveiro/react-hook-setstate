# react-hook-setstate
Use setState function in react hooks as you would use in react classes.

## Install
```
npm install -S react-hook-setstate
```

## Usage
```javascript
import createState from 'react-hook-setstate';

const MyComponent = () => {
  const [state, setState] = createState({counter1: 0, counter2: 0});
  
  return (
    <div>
        Counter 1: {state.counter1}<br />
        <button onClick={() => setState({counter1: state.counter1 + 1})}> 
            Add
        </button>
        <hr />
        Counter 2: {state.counter2}<br />
        <button onClick={() => setState({counter2: state.counter2 + 1})}> 
            Add
        </button>
    </div>
  );
}
```
