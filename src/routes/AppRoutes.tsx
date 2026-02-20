import React, { Suspense, lazy } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import ProfileRoutes from "./ProfileRoutes";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const SearchResults = lazy(() => import("../pages/SearchResults"));
const DestinationDetails = lazy(() => import("../pages/DestinationDetails"));
const Destinations = lazy(() => import("../pages/destinations/Destinations"));
const AccommodationPage = lazy(() => import("../pages/accommodations/AccommodationPage"));
const TravelPage = lazy(() => import("../pages/travel/TravelPage"));

const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const NotFound404 = lazy(() => import("../pages/errors/NotFound404"));

// Wrappers to pass destinationId param
const AccommodationWrapper = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <p>Destination not found.</p>;
  return <AccommodationPage destinationId={Number(id)} />;
};

const TravelWrapper = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <p>Destination not found.</p>;
  return <TravelPage destinationId={Number(id)} />;
};

const AppRoutes: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>

      {/* Auth Routes */}
      <Route
        path="/auth/*"
        element={
          <AuthLayout>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </AuthLayout>
        }
      />

      {/* Main Routes */}
      <Route
        path="/*"
        element={
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destination/:id" element={<DestinationDetails />} />

              {/* New destination sub-pages */}
              <Route path="/destination/:id/accommodations" element={<AccommodationWrapper />} />
              <Route path="/destination/:id/travel" element={<TravelWrapper />} />

              <Route path="/profile/*" element={<ProfileRoutes />} />
              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </MainLayout>
        }
      />

    </Routes>
  </Suspense>
);

export default AppRoutes;
