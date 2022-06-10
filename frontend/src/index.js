import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// **************** React Context Use Below / Do not destroy!! *******************
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { AuthProvider } from './context/AuthProvider';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { disableReactDevTools } from '@fvilers/disable-react-devtools';
// // import { Auth0Provider } from '@auth0/auth0-react';

// // import { store } from './app/store';
// // import { Provider } from 'react-redux';

// if (process.env.NODE_ENV === 'production') {
//   disableReactDevTools();
// }

// // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// // const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// createRoot(document.getElementById('root')).render(
//   <>

//   {/* <React.StrictMode> */}
//     {/* <Provider store={store}> */}
//     <BrowserRouter>
//       <AuthProvider>
//         {/* <Auth0Provider domain={domain} clientId={clientId} redirectURI={window.location.origin}> */}
//         <Routes>
//           <Route path='/*' element={<App />} />
//         </Routes>
//         {/* </Auth0Provider> */}
//       </AuthProvider>
//     </BrowserRouter>
//     {/* </Provider> */}
//   {/* </React.StrictMode> */}
//   </>
// );
