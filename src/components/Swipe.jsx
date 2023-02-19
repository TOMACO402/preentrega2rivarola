import {Carousel} from 'react-bootstrap';
import activate from "/xampp2/htdocs/preentrega2rivarola/src/images/Activate.jpg";
import anticold from "/xampp2/htdocs/preentrega2rivarola/src/images/anticold.jpg";
import ocean from "/xampp2/htdocs/preentrega2rivarola/src/images/Ocean.jpg";

const Swipe = () => {
  return(
    <div className='Container'>
        <Carousel >
       <Carousel.Item>
        <img
        className="d-block w-100"
        src={activate}
        alt="First slide"
        />
     <Carousel.Caption>
      <h3>1</h3>
      <p></p>
     </Carousel.Caption>
     </Carousel.Item>
    <Carousel.Item>
     <img
      className="d-block w-100"
      src={anticold}
      alt="Second slide"
     />

    <Carousel.Caption>
      <h3>2</h3>
      <p></p>
    </Carousel.Caption>
    </Carousel.Item>
  <Carousel.Item>
     <img
      className="d-block w-100"
      src={ocean}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>3</h3>
      <p>
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    )
}

export default Swipe;