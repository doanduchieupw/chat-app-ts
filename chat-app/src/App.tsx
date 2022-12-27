import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FullLayout } from './components/layout';
import ProtectedRoute from './components/protected-route';
import { Register, Login, Conversation } from './pages';
import { AuthContext } from './utils/contexts/auth-context';
import { User } from './utils/types/auth';

const App = () => {
  const [user, setUser] = useState<User>();
  return (
    <AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
      <Routes>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='test' element={<FullLayout />} />
        <Route
          path='conversations'
          element={
            <ProtectedRoute>
              <Conversation />
            </ProtectedRoute>
          }
        />
        <Route path=':id' element={<div>Conversation ID page!</div>} />
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
