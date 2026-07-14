import React, { useContext } from 'react';
import Courses from '../../data/Course';
import CourseCard from '../../Components/CourseCard/CourseCard';
import { ThemeContext } from '../../context/ThemeContext';
import "../Dashboard/Dashboard.css";
function Dashboard() {
    const{theme} = useContext(ThemeContext);
    return (

        <div className={`page ${theme}`}>
            <h2>Dashboard</h2>
            <h3>Courses</h3>
            
            <div className="courses-grid">
                {Courses.map(course => (
                    <CourseCard key={course.id} {...course} />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;