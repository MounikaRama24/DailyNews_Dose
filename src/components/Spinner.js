import React from 'react';
import loading from './loading.gif';

function Spinner(props) {
  return (
    <div className='text-center' mode={props.mode}>
      <img src={loading} alt='loading' />
    </div>
  );
}

export default Spinner;
