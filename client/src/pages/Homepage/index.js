import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';


/* CSS styles */
import './styles.css'

const Homepage = () => {

    const { userRole, setUserRole } = useContext(UserContext);

    return (
        <section id="homePageTop"> 
            <h1>Connecting construction jobs and labor. <span id="faster">Faster.</span></h1>
            <section id="register">
                <div className="homepageItem">
                    {/*Setting user role to 1 (contractor) or 2 (worker) on click */}
                    <Link className="links" to="/Register" style={{ textDecoration: 'none' }} onClick={() => setUserRole('1')}>Are you a contractor looking for labor?</Link>
                    <Link className="links" to="/Register" style={{ textDecoration: 'none' }} onClick={() => setUserRole('2')}>Are you a skilled laborer looking for work?</Link>
                </div>
            </section>
            <section id="returning">
                <div className="homepageItem">
                    <p>Returning User?</p>
                    <Link className="links" to="/Login" style={{ textDecoration: 'none' }}>Login</Link>
                </div>
            </section>
        </section>
    )
}

export default Homepage;
