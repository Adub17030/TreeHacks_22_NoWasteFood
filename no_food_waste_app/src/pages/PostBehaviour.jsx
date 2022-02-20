import React from 'react';
import ActivityForm from "../components/Activity_form";

function post_behaviour() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
          <h3>Share with your circle the sustainable behaviour you have today!</h3>
          </div>
        </div>
      </div>
      
        <ActivityForm />
    </div>
  )
}

export default post_behaviour