import React from 'react';

import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import CareerGrid from './career-components/CareerGrid';
function App() {
  return <div>
  <Navbar />
  <PageHeader headertitle="Blog" subheader="Blog" />
  <CareerGrid/>
  <CallToActionV1 />
  <Footer />
</div>
}

export default App;
