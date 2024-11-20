import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import HomeServicesCards from './components/HomeServicesCards';
import Footer from './components/Footer';
import Login from './pages/Login';
import DataDeletion from './pages/DataDeletion';
import DomesticCleaning from './pages/DomesticCleaning';
import Booking from './pages/Booking';
import BookingProvider from './components/BookingContext';
import Services from './components/BookingSteps/Services';
import Scheduling from './components/BookingSteps/Scheduling';
import Duration from './components/BookingSteps/Duration';
import Options from './components/BookingSteps/Options';
import Pets from './components/BookingSteps/Pets';
import Calendar from './components/BookingSteps/Calender';
import Hours from './components/BookingSteps/Hours';
// import Signup from './components/BookingSteps/Signup';

function App() {
  return (
    <GoogleOAuthProvider clientId="your-google-client-id">
      <Router>
        <div>
          <Header />
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<><Hero /><AboutUs /><HomeServicesCards /><Footer /></>} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/datadeletion" element={<DataDeletion />} />

            {/* Domestic Cleaning Booking Workflow */}
            <Route
              path="/domestic-cleaning/*"
              element={
                <BookingProvider>
                  <Routes>
                    <Route path="booking" element={<Booking />} />
                    <Route path="booking/services" element={<Services />} />
                    <Route path="booking/scheduling" element={<Scheduling />} />
                    <Route path="booking/duration" element={<Duration />} />
                    <Route path="booking/options" element={<Options />} />
                    <Route path="booking/pets" element={<Pets />} />
                    <Route path="booking/calender" element={<Calendar />} />
                    <Route path="booking/session/hour" element={<Hours />} />
                    {/* <Route path="booking/signup" element={<Signup />} /> */}
                    <Route
                      path=""
                      element={
                        <>
                          <DomesticCleaning />
                          <Footer />
                        </>
                      }
                    />
                  </Routes>
                </BookingProvider>
              }
            />

            {/* Login */}
            <Route path="/login" element={<><Login /><Footer /></>} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
