import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { auth } from './Config/Firebase';
import Navbar from './Component/Navbar'; 
import ClassForm from './Pages/Class/ClassForm';
import ClassList from './Pages/Class/ClassList';
import ExamResult from './Pages/Exam/ExamResult';
import ExamSchedule from './Pages/Exam/ExamSchedule';
import FeeStructure from './Pages/Fees/FeeStructure';
import FeeVoucher from './Pages/Fees/FeeVoucher';
import StudentList from './Pages/Student/StudentList';
import StudentRegistration from './Pages/Student/StudentRegistration';
import SubjectList from './Pages/Subject/SubjectList';
import SubjectsAdd from './Pages/Subject/SubjectsAdd';
import SyllabusForm from './Pages/Syllabus/SyllabusForm';
import SyllabusList from './Pages/Syllabus/SyllabusList';
import TeacherList from './Pages/Teacher/TeacherList';
import TeacherRegistration from './Pages/Teacher/TeacherRegistration';
import FeeSubmission from './Pages/Fees/FeeSubmission';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Signin/Signin';
import AuthRoute from './Routes/AuthRoutes';
import ProtectedRoute from './Routes/ProtectedRoutes';

const App = () => {


  return (
    
        <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
                    </Route>

        <Route  element={<ProtectedRoute />}>
     
        
          <Route path="/studentlist" element={<StudentList />}/>
          <Route path="/AdmissionForm" element={<ClassForm />}/>
          <Route path="/ClassForm" element={<ClassForm />} />
          <Route path="/ClassList" element={<ClassList />} />
          {/* <Route path="/ExamResult" element={<ExamResult />} /> */}
          {/* <Route path="/ExamSchedule" element={ <ExamSchedule />}/> */}
          {/* <Route path="/FeeStructure" element={<FeeStructure /> }/> */}
          {/* <Route path="/FeeVoucher" element={ <FeeVoucher /> }/> */}
          <Route path="/StudentRegistration" element={<StudentRegistration />}/>
          <Route path="/SubjectList" element={<SubjectList />}/>
          <Route path="/SubjectsAdd" element={<SubjectsAdd />} />
          {/* <Route path="/SyllabusForm" element={<SyllabusForm />} /> */}
          {/* <Route path="/SyllabusList" element={<SyllabusList />} /> */}
          <Route path="/TeacherList" element={<TeacherList />} />
          <Route path="/TeacherRegistration" element={<TeacherRegistration />}/>
          {/* <Route path="/FeeSubmission" element={<FeeSubmission />} /> */}
        </Route>
        </Routes>
      
  );
};

export default App;

