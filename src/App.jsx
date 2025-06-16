import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import Analytics from "./pages/Analytics";
import Owners from "./pages/Owners";
import Chargers from "./pages/Chargers";
import AddStationForm from "./features/stations/AddStationForm";
import ChargerDetails from "./features/chargers/ChargerDetails";
import Drivers from "./pages/Drivers";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import DriverDetails from "./features/Drivers/DriverDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import AddNewOwner from "./features/owners/AddNewOwner";
import OwnerDetail from "./features/owners/OwnerDetail";
import Tariffs from "./pages/Tariffs ";
import Partners from "./pages/Partners";
import Stations from "./pages/Stations";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import DriverGroups from "./features/Drivers/DriverGroups";
import StationsDetail from "./features/stations/StationsDetail";
import AddTariffForm from "./features/tariff/AddTariffForm";
import AddPartnerForm from "./features/Partners/AddPartnerForm";
import { AuthProvider } from "./context/AuthContext";
import AddChargerForm from "./features/chargers/addChargerForm";
import OccppOperations from "./ui/OccppOperations";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3, // 3 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="analytics" />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="partners" element={<Partners />} />
              <Route path="addPartner" element={<AddPartnerForm />} />
              <Route path="stations">
                <Route index element={<Stations />} />
                <Route path="addStation" element={<AddStationForm />} />
              </Route>

              <Route path="stations/:id" element={<StationsDetail />} />
              <Route path="chargers" element={<Chargers />} />
              <Route path="addCharger" element={<AddChargerForm />} />
              <Route path="chargers/:id" element={<ChargerDetails />} />
              {/* <Route path="drivers" element={<Drivers />} />  not included in phase-1 */}
              {/* <Route path="driverGroups" element={<DriverGroups />} /> */}

              <Route path="tariffs" element={<Tariffs />} />
              <Route path="ocppoperations" element={<OccppOperations />} />
              <Route path="addTariff" element={<AddTariffForm />} />

              <Route path="transactions" element={<Transactions />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="signup" element={<Signup />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
