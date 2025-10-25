
import Header from '../Shared/Header';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header>

                </Header>
                
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;