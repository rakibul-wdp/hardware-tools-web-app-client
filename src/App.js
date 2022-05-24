import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddReview from './Pages/Dashboard/AddReview';
import AddTool from './Pages/Dashboard/AddTool';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageTools from './Pages/Dashboard/ManageTools';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import ToolDetail from './Pages/Purchase/ToolDetail';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='tool/:toolId'
          element={
            <RequireAuth>
              <ToolDetail />
            </RequireAuth>
          }
        />
        <Route
          path='dashboard'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path='myOrders' element={<MyOrders />} />
          <Route path='addReview' element={<AddReview />} />
          <Route path='manageOrders' element={<ManageOrders />} />
          <Route path='addTool' element={<AddTool />} />
          <Route path='makeAdmin' element={<MakeAdmin />} />
          <Route path='manageTools' element={<ManageTools />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
