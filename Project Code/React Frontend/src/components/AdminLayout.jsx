import React from 'react';
import { Container } from 'reactstrap';
import Header from './AdminPanel/Static/Header';
import Footer from './Static/Footer';

export default props => (

    <div>
        <Header />
        <Container className="main" >
            {props.children}
        </Container>
        <Footer />
    </div>

);

