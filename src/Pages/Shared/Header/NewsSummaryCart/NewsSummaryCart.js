import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const NewsSummaryCart = ({news}) => {
    const {_id, title, total_view, author, details, image_url, rating } = news;
    return (
        <Card className='mb-5'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                    roundedCircle
                    className='me-3'
                    src= {author?.img}
                    style={{height: '60px'}}
                    ></Image>
                    <div>
                        <p className='mb-0'> {author?.name} </p>
                        <p> {author?.published_date} </p>
                    </div>
                </div>
                <div>
                    <FaBookmark className='me-2'></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
                <Card.Body>
                      <Card.Title> {title} </Card.Title>
                      <Card.Img variant="top" src= {image_url} />
                      <Card.Text>
                           {details.length > 250 ?
                           <> {details.slice(0,250) + '...' } <Link to={`/news/${_id}`}>Read more. </Link> </>
                           :
                           details
                         }
                      </Card.Text>                       
                </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                
                         <div>
                            <FaStar className='text-warning me-2'></FaStar>
                            <span> {rating?.number} </span>
                         </div>
                         <div>
                            <FaEye className='me-2'></FaEye>
                            <span> {total_view} </span>
                         </div>
            </Card.Footer>
      </Card>
    );
};

export default NewsSummaryCart;