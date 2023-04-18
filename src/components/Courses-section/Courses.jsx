import React from 'react'
import { Container, Row, Col } from "reactstrap";
import Images from "../Images/man.png";
import "./course.css";
import CourseCard from "./CourseCard";

const coursesData = [
 
    {
        id: '01',
        title:'Web Design Bootcamp-2022 for beginners',
        lesson:12,
        students:12.5,
        rating:5.9,
        ImgUrl: Images
    },
    {
        title:'Profesional Graphic Design, Photoshop, Adobe XD',
        lesson:12,
        students:12.5,
        rating:5.9,
        ImgUrl: Images
    },
    {
        id: '03',
        title:'UI/UX BootCamp for Beginners in 2023',
        lesson:12,
        students:12.5,
        rating:5.9,
        ImgUrl: Images
    }
]

const Courses = () => {
  return (
<section>
    <Container>
        <Row>
            <Col lg="12" className="mb-5">
                <div className="course_top text-center">
                        <h1 className='text-center'>Our Popular Courses</h1>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum illum omnis asperiores? Omnis doloribus ut minus dolores quaerat beatae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas asperiores illum recusandae? Perferendis sit id, soluta atque omnis officiis placeat!</p>
                        <div className="w-50 text-end">
                        <button className="btn btn-success text-center">See All </button>
                        </div>
                    </div>
            </Col>
            {
                coursesData.map(item =>(

                    <Col lg="4" md="6">
                        <CourseCard key={item.id} item={item}/>
                    </Col>
                ))
            }
        </Row>
    </Container>
</section>
  )
}

export default Courses
