import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import Images from '../Images/interface-g42f015a60_1280.png';
import './free-course.css';
import FreeCourseCard from './FreeCourseCard';

const FreeCourseData = [
    {
        id: 1,
        title: 'Basic Web Devrelopment Course',
        imgUrl: Images,
        students: 5.3,
        rating: 1.7,

    },

    {
        id: 2,
        title: 'Coding for Junior Basic Course',
        imgUrl: Images,
        students: 5.3,
        rating: 1.7,

    },
    {
        id: 3,
        title: 'Search Engine optimization- Basic',
        imgUrl: Images,
        students: 5.3,
        rating: 1.7,

    },
    {
        id: 4,
        title: 'Basic UI/UX Design Course - Figma',
        imgUrl: Images,
        students: 5.3,
        rating: 1.7,

    },
]

const FreeCourse = () => {
  return (
   <section>
    <Container>
        <Row>
            <Col lg="12" className="text-center mb-5">
             <h2  className='fw-bold'>Our Free Courses</h2>
            </Col>
            {FreeCourseData.map((item) =>(
            <Col lg="3" key={item.id}>
            <FreeCourseCard item={item}/>
            </Col>
                ))}
        </Row>
    </Container>
   </section>
  )
}

export default FreeCourse
