import './App.css';
import "./App.scss";
import { Route, Routes } from 'react-router-dom';
import { Main } from './Components/Index/Main';
import { Bog } from './Components/Index/Bog/bog';
import { Admin } from './Components/Index/Admin/admin';
import { IbCoco } from './Components/IB-Coco/ibcoco';
import { About } from './Components/IB-Coco/About/about';
import LearnerProfile from './Components/IB-Coco/LearnerProfile/learner';
import { Core } from './Components/IB-Coco/Core/core';
import { Teacher } from './Components/Index/Teachers/teachers';
import { Subject } from './Components/IB-Coco/Subjects/Subjects';
import { Schedule } from './Components/IB-Coco/StudentSchedule/Schedule';
import { Calendar } from './Components/IB-Coco/Calendar/Calendar';
import { Assessment } from './Components/IB-Coco/Assessment/Assessment';
import { Counselling } from './Components/Counselling/Counselling';
import { Support } from './Components/Counselling/StudentSupport/Support';
import { Guide } from './Components/Counselling/UniGuide/Guide';
import { Admission } from './Components/Admission/Admission';
import { Contact } from './Components/Contact/contact';
import { StudentMain } from './Components/StudentCorner/StudentMain';
import { Facilities } from './Components/StudentCorner/Facilities/Facilities';
import { Activities } from './Components/StudentCorner/Activities/Activities';
import { Achievement } from './Components/StudentCorner/Achievements/Achievment';
import { Graduation } from './Components/StudentCorner/Graduation/Graduation';

function App() {
  return (<>
    <div className="App">
      <div>
        <Routes>
            {/**Home */}
            <Route path='/' element={<Main/>}/>
            <Route path="/Bog" element={<Bog/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/Teacher" element={<Teacher/>}/>

            {/**Curriculum */}
            <Route path="/IbCoco" element={<IbCoco/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/LearnerProfile" element={<LearnerProfile/>}/>
            <Route path="/Core" element={<Core/>}/>
            <Route path="/Subject" element={<Subject/>}/>
            <Route path="/Schedule" element={<Schedule/>}/>
            <Route path="/Calendar" element={<Calendar/>}/>
            <Route path="/Assessment" element={<Assessment/>}/>

            {/**Counselling */}
            <Route path="/Counselling" element={<Counselling/>}/>
            <Route path="/Support" element={<Support/>}/>
            <Route path="/Guide" element={<Guide/>}/>

            {/** Admission */}
            <Route path="/Admission" element={<Admission/>}/>

            {/** Student's Corner */}
            <Route path='/Student' element={<StudentMain/>} />
            <Route path='/Facilities' element={<Facilities/>} />
            <Route path='/Activities' element={<Activities/>} />
            <Route path='/Achievement' element={<Achievement/>} />
            <Route path='/Graduation' element={<Graduation/>} />

            {/** Contact */}
            <Route path='/Contact' element={<Contact/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
