import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import DisplayUser from './AdminPages/DisplayUser';
import EditUser from './AdminPages/EditUser';
import AddUser from './AdminPages/AddUser';
import ErrorPage from './AdminPages/ErrorPage';
import AddAcademy from './AdminPages/AddAcademy';
import EditCourse from './AdminPages/EditCourse';
import ViewCourse from './AdminPages/ViewCourse';
import StudentInstitute from './UserPages/StudentInstitute';
import AddCourse from './AdminPages/AddCourse';
import HeaderStudent from './Components/HeaderStudent';
import Course from './UserPages/Course';
import EnrollPage from './UserPages/EnrollPage';
import LoginForm from './Pages/LoginForm';
import Regis from './Pages/regis';
import EditAcademy from './AdminPages/EditAcademy';
import Card from './Components/Card';
import Review from './UserPages/Review';
import EnrolledCourse from './UserPages/EnrolledCourse';
import  PrivateRoute from './Pages/Private.js';
import  AdminPrivateRoute from './Pages/adminPrivate';
import ReviewAdmin from './AdminPages/ReviewAdmin';
import SuccessEnroll from './UserPages/SuccessEnroll';
import ReviewForm from './UserPages/ReviewForm';
import UserLogin from './Pages/UserLogin';
import UserRegis from './Pages/Userregis';
const links = [
    { text: 'Home', location: "/" },
    { text: 'Insitute', location: "/Insitute" },
    { text: 'Courses', location: "/Courses" },
    { text: 'AddReview', location: "/AddReview" },
  ];
  test.each(links)(
    "Check if Nav Bar have %s link.",
    (link) => {
      render(<Header />);
      const linkDom = screen.getByText(link.text); 
      expect(linkDom).toHaveAttribute("href", link.location);
    }
  );
  describe('<EnrollPage />', () => {
    test('feEnrollPage', () => {
      render(<MemoryRouter><EnrollPage /></MemoryRouter>);
      const userId = screen.getByTestId('userId');
      const courseId = screen.getByTestId('courseId');
      const firstName = screen.getByTestId('firstName');
      const lastName = screen.getByTestId('lastName');
      const mobile = screen.getByTestId('mobile');
      const gender = screen.getByTestId('mobile');
      const email = screen.getByTestId('email');
      const fatherName = screen.getByTestId('fatherName');
      const motherName = screen.getByTestId('motherName');
      const eligibilty = screen.getByTestId('eligibilty');
      const hscName = screen.getByTestId('hscName');
      const hscMarks = screen.getByTestId('hscMarks');
      const age = screen.getByTestId('age');
      const houseNumber = screen.getByTestId('houseNumber');
      const areaName = screen.getByTestId('areaName');
      const pinCode = screen.getByTestId('pinCode');
      const state = screen.getByTestId('state');
      const nationality = screen.getByTestId('nationality');
      fireEvent.change(email, {target : {value : 'test email'}})
      expect(email.value).toBe('test email');
      fireEvent.change(password, {target : {value : 'test password'}})
      expect(password.value).toBe('test password');
    });
  });