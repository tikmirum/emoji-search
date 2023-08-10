import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { EmojiSearch } from './elements/EmojiSearch';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <EmojiSearch />
        <section />
      </>
    )
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
