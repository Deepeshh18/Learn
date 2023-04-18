import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './features.css'

const FeatureData = [
    {
        title: 'Quick Learning',
        desc:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, labore?",
        icon: 'ri-draft-line',

    },
    {
        title: 'Passionate Approch',
        desc:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, labore?",
        icon: 'ri-discuss-line',

    },
    {
        title: 'Professional Team',
        desc:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, labore?",
        icon: 'ri-team-fill',

    },
    {
        title: 'Certification',
        desc:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, labore?",
        icon: 'ri-draft-fill',

    },

]
const Features = () => {
  return (
    <section>
        <Container>
            <Row>
                {FeatureData.map((item,index) => (
                <Col lg="6" md="6" key={index}>
                    <div className="single_feature text-center px-4">
                        <h2 className='mb-3'><i class={item.icon}></i></h2>
                        <h6>{item.title}</h6>
                        <p>{item.desc}</p>
                    </div>
                </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default Features
