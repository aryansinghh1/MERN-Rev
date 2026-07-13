import './Course.css';

function CourseCard({ image, title, instructor, price, level, duration }) {
    return (
        <div className="course-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p className="instructor">{instructor}</p>
            <p className="meta">{level} • {duration}</p>
            <p className="price">₹{price}</p>
        </div>
    );
}

export default CourseCard;