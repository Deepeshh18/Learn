import React from 'react'

const FreeCourseCard = ({item}) => {
    const {imgUrl, title, students, rating} = item
  return (
    <div className="single_free_course">
    <div className="free_course_img mb-5">
        <img src={imgUrl} alt="" className='w-100' />
        <button className="free_btn btn btn-success">
            Free
        </button>
    </div>
        <div className="free_course_details">
         <h6>{title}</h6>
         <div className='d-flex align-item-center gap-5'>
            <h5><span className='d-flex align-item-center gap-2'><i class="ri-user-line"></i>{students}K</span></h5>
           <h5><span className='d-flex align-item-center gap-2'><i class="ri-star-fill"></i>{rating}K</span></h5>
         </div>
        </div>
</div>
  )
}

export default FreeCourseCard
