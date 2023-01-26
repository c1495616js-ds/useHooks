import { storiesOf } from '@storybook/react';
import React from 'react';
import { useFirstMount } from '.';
import ShowDocs from '../utils/show-docs';

const Child = () => {
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

const Demo = () => {
  const [show, setShow] = React.useState(true);
  return (
    <div>
      <h1>This is Parent Component</h1>
      {show && <Child />}
      <br />
      <button
        type="button"
        onClick={() => {
          setShow(true);
        }}
      >
        Show Child
      </button>

      <button
        type="button"
        onClick={() => {
          setShow(false);
        }}
      >
        Destroy Child
      </button>
    </div>
  );
};

storiesOf('State/useFirstMount', module)
  .add('Docs', () => <ShowDocs md={require('./use-first-mount.md')} />)
  .add('Demo', () => <Demo />);
