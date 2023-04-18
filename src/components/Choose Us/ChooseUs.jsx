import {Container, Row, Col} from "reactstrap";
import Images from "../Images/computer-g16d5a066f_1920.jpg";
import "./choose-us.css";
import ReactPlayer from 'react-player';
import { useState } from "react"

const ChooseUs = () => {
    const [showVideo,setShowVideo] = useState(false)
  return (
  <section>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="choose_content">
                    <h1>Why Choose Us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum hic enim deleniti pariatur placeat consectetur distinctio mollitia assumenda, nemo consequuntur recusandae quia ut. Ex deserunt doloremque mollitia amet aperiam molestias!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, blanditiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus maxime alias eveniet, ratione natus corrupti.</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="choose_img">
                    {
                        showVideo ? (<ReactPlayer url='https://youtu.be/_g45BJCAXu4' controls width={"100%"} height={"200px"}/>):(
                            <img src={Images} alt="" width={"100%"} height={"300px"} className='w-100'/>
                        )
                    }
                    {
                        !showVideo &&  <span className="play_icon">
                        <i class="ri-play-line" onClick={()=>setShowVideo(!showVideo)}></i>
                        </span>
                    }
                   
                </div>
            </Col>
        </Row>
    </Container>

  </section>
  )
}

export default ChooseUs
