import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/pages/Dashboard";
import Products from "./components/pages/Products";
import OrdersManagement from "./components/OrdersManagement";
import AddProduct from "./components/AddProduct";
import UsersManagement from "./components/UsersManagement";
import { Toaster } from "react-hot-toast";
import AdminLogin from "./components/AdminLogin";

const MainApp = () => {
  return (
    <div className="flex h-screen bg-gray-800">
      <Toaster position="top-center" reverseOrder={false} />
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<OrdersManagement />} />
            <Route path="/users" element={<UsersManagement />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      {window.location.pathname === "/admin/login" ? <AdminLogin /> : <MainApp />}
    </Router>
  );
};

export default App;
