import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then (result => {
            const user = result.user;
            console.log(user); 
        })
        .catch(error => console.error(error));
       
    }
    return (
        <div>
         
           <ButtonGroup vertical>
                 <Button onClick={handleGoogleSignIn} className='mb-8' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                 <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>     
           </ButtonGroup>
           <div className='mt-4'>
            <h5>Find us on </h5>
            <ListGroup>
                <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'> <FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                <ListGroup.Item className='mb-2'> <FaLinkedin></FaLinkedin> Linkedin</ListGroup.Item>
                <ListGroup.Item className='mb-2'> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                <ListGroup.Item className='mb-2'> <FaWhatsapp></FaWhatsapp> What's app</ListGroup.Item>
                <ListGroup.Item className='mb-2'> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                
            </ListGroup>
           </div>
           <div>
            <BrandCarosel></BrandCarosel>
           </div>
         </div>
         
    );
};

export default RightSideNav;