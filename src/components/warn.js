import React from 'react';

export default function Warn(props) {
  if (!props.warn) {
    return null;
  }
  return <h1 style={{backgroundColor: 'red', color: 'black'}}>Warning!!!!</h1>;
}
