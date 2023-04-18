import React from 'react'
import Images from "../Images/man.png";



const CourseCarrd = ({item}) => {
  return (
  <div className="single_course_item">
    <div className="course_img">
        <img src={Images} alt="" className='w-100' />
    </div>
    <div className="course_details">
      <h6 className="course_title mb-4">
     {item.title}
      </h6>
      <div className="d-flex justify-content-between align-items-center">
        <p className="lesson d-flex align-items-center gap-1">
         <h5><i class="ri-book-open-line"></i> {item.lessons} Lessons</h5> 
        </p>

        <p className="students d-flex align-items-center gap-1">
        <h5><i class="ri-user-line"></i> {item.students} K</h5> 
        </p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p className="lesson d-flex align-items-center gap-1">
        <h5><i class="ri-star-fill"></i> {item.rating} K</h5> 
        </p>
        <p className="lesson d-flex align-items-center gap-1">
          <a href="#" className='btn btn-success'>Enroll Now</a>
        </p>

      </div>
    </div>
  </div>
  )
}

export default CourseCarrd
