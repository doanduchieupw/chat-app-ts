import { Outlet, Route, Routes } from 'react-router-dom';
import { RegisterPage } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RegisterPage />} />
        <Route
          path='conversations'
          element={
            <div>
              <div>Conversations</div>
              <Outlet />
            </div>
          }
        />
        <Route path=':id' element={<div>Conversation ID page!</div>} />
      </Routes>
    </>
  );
};

export default App;
