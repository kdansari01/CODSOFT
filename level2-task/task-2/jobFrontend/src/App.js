import Home from "./pages/Home";
import JobsPage from "./pages/JobsPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectRoute";
import LoginPage from "./component/registerAndLoging/LoginPage";
import SignUpPage from "./component/registerAndLoging/SignUp";
import ProfilePage from "./component/google.auth/ProfilePage";
import Jobs from "./pages/jobPage/Jobs";
import HiringDashboard from "./pages/hiringDashboard/HiringDashboard";
import JobPosting from "./pages/hiringDashboard/AddNewJob";
import AccountManagement from "./pages/hiringDashboard/accountManagement";
import ApplicationFormPage from "./pages/jobPage/ApplicationFormPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/SignUp" element={<SignUpPage />} />
          <Route
            exact
            path="/Home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          {/* ProfilePage */}
          <Route exact path="/jobs/:category" element={<JobsPage />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/dashboard" element={<HiringDashboard />} />
          <Route
            exact
            path="/dashboard/post-new-job"
            element={<JobPosting />}
          />
          <Route
            exact
            path="/dashboard/account-management"
            element={<AccountManagement />}
          />

          <Route exact path="/profile/:id" element={<ProfilePage />} />

          <Route
            exact
            path="/apply/:title/:id"
            element={<ApplicationFormPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
