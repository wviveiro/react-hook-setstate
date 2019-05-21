# react-hook-setstate
Create a setState function, similar to this.setState to be used with React Hooks

## Install
```
npm install -S wviveiro/react-hook-setstate
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
