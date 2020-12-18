import React, { Component } from 'react';
import AreaCard from '../../components/AreaCard/AreaCard';

import './Home.scss';

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='Main-Grid-container'>
          <div className='Grid-container'>
            <AreaCard
              soon='Pr&oacute;ximamente'
              area='Front-End'
              className='Container-disabled'
              to='/soon'
              image='https://firebasestorage.googleapis.com/v0/b/learningator.appspot.com/o/images%2Ffrontend.png?alt=media&token=6799eba8-60fb-46c3-ba73-4d7a4d0e1911'
            />
            <AreaCard
              soon='Pr&oacute;ximamente'
              area='Back-End'
              className='Container-disabled'
              to='/soon'
              image='https://firebasestorage.googleapis.com/v0/b/learningator.appspot.com/o/images%2Fbackend.png?alt=media&token=3bb5b3de-2375-42e5-8f3c-7b23bae9e5c2'
            />
            <AreaCard
              area='Data Science'
              to='/ds'
              image='https://firebasestorage.googleapis.com/v0/b/learningator.appspot.com/o/images%2Fds.png?alt=media&token=cde28f7e-ae5f-4227-aab1-d44b3954d11a'
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
