import { useNavigate } from 'react-router-dom';
import './notfound.scss';

const NotFound = () => {
    const navigate = useNavigate();
    const returnHandler = () => navigate('/');

    return (
        <section className='notfound'>
            <h2>Page Not Found</h2>
            <button onClick={returnHandler}>Back Dashboard</button>
        </section>
    );
};

export default NotFound;
