function CourseCard(props){
    return(
        <div>
           < img src={props.image} alt="CourseName"/>
           <h3>{props.title}</h3>
           <p>{props.instructor}</p>
           <p>{props.price}</p>
           {/* <p>{props}</p> */}
        </div>
    )
}
export default CourseCard;