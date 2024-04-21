import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BlogShare from "../assets/BlogShare.jpg"


function NewsItem({title,description,src,url,publish,content}) {
 
  // random string ttile generator 
  return (
    <Card style={{ maxWidth: '350px' }} className='bg-dark text-light mb-3 d-inline-block my-3 mx-2  py2' >
      <Card.Img variant="top" src={src?src:BlogShare} className='img-fluid'  style={{height:"200px",width:"342px"}}/>
      <Card.Body>
        <Card.Title>{title?title.slice(0,50):<p>Sharing the Stories That Matter.</p>}</Card.Title>
        {publish}
        <Card.Text>
        {description ?description.slice(0,40):<p>Discover, share, and connect with our blog sharing app.</p>}
      </Card.Text>
        <Button href={url} variant='primary'>Read more</Button>
      </Card.Body>
    </Card>
  );
}

export default NewsItem;