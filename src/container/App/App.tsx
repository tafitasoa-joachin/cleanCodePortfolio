import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('../../pages/Home'));
const About = React.lazy(() => import('../../pages/About'));
const Contact = React.lazy(() => import('../../pages/Contact'));
const Project = React.lazy(() => import('../../pages/Project'));
const Header = React.lazy(() => import('../../components/Header'));

const App: React.FC = () => (
    <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Suspense>
    </Router>
);

export default App;
