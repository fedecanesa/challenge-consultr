import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routesEnum } from '../utils/constants/routesEnum';
import { Dashboard, NotFound } from '../pages';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routesEnum.DASHBOARD} element={<Dashboard />} />
                <Route path={routesEnum.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
