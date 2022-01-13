import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import System from './System';

const Notifi = observer((props) => {

  return (
    <>
      <div className='container'>
        <div>
          <div className='title'>Thông Báo
            <div className='calender'  >
              <div className='calendar-box' >
                <h3>
                  <span>03</span>
                  <span>Mon</span>
                </h3>
              </div>
              <div className='calendar-box' >
                <h3>
                  <span>04</span>
                  <span>Tue</span>
                </h3>
              </div>
              <div className='calendar-box'>
                <h3 className='active'>
                  <span>05</span>
                  <span>Wed</span>
                </h3>
              </div>
              <div className='calendar-box'>
                <h3>
                  <span>06</span>
                  <span>Thu</span>
                </h3>
              </div>
              <div className='calendar-box'>
                <h3>
                  <span>07</span>
                  <span>Fri</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className='system'>
          <System />
        </div>
      </div>
    </>
  );
});

export default Notifi;
