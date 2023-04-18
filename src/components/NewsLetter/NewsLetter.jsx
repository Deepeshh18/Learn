import React from 'react'
import './newsletter.css'
import {Container, Row, Col} from 'reactstrap';
import { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  return (
   <section>
   <Container className="newsletter">
    <Row>
        <Col lg="12" className="text-center">
            <h2 className='mb-4'>Subscribe Our Newsletter</h2>
            <div className="subscribe">
            <input className="form-control text-center w-50" type="email" placeholder='Email' />
            <button className='btn btn-danger'>Subscribe</button>
            </div>
        </Col>
    </Row>
   </Container>
   </section>
  )
}

export default NewsLetter
