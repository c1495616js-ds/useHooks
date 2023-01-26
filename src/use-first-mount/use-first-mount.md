# `useFirstMount`

React state hook that tracks if the component is first mounted.

## Usage

```tsx
import { useFirstMount } from '@c1495616js/useHooks';

const Demo = () => {
  const isFirstMount = useFirstMount();
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ border: '1px solid black', padding: '8px' }}>
      <h2 style={{ color: 'rebeccapurple' }}>I am child Component</h2>
      <span>This component is just mounted: {isFirstMount ? 'YES' : 'NO'}</span>
      <br />
      <div>Count: {count}</div>
      <button
        type="button"
        onClick={() => {
          setCount((count) => ++count);
        }}
      >
        re-render
      </button>
    </div>
  );
};
```
