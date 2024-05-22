import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import { Account } from "../features/Account/Account";
import { Appointments } from "../features/Appointments/Appointments";
import { Login } from "../features/Authentication/Login/Login";
import { Register } from "../features/Authentication/Register/Register";
import { MainLayout } from "../features/Layout/MainLayout";
import { Reminders } from "../features/Reminders/Reminders";
import { Journal } from "../features/Journal/Journal";

export const ApplicationRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account" element={<Account />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Register />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </MainLayout>
  );
};
