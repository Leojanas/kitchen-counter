import React from 'react';
import ReactDOM from 'react-dom';
import ItemDetail from './item-detail';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemDetail items={[{id:1,name:'',expiration: ''}, {}]} match={{params:{id:1}}} />, div);

  ReactDOM.unmountComponentAtNode(div);
});