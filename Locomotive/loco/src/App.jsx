import React from 'react'
import Page1 from './component/page1'
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  return (
    <div>
      <Page1></Page1>
      <Page1></Page1>
      <Page1></Page1>
    </div>

  )
}

export default App
