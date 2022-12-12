import { Outlet, Route, Routes } from 'react-router-dom';
import { FullLayout } from './components/layout';
import { RegisterPage } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RegisterPage />} />
        <Route path='/test' element={<FullLayout />} />
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
