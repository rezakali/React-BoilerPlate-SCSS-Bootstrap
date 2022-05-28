import Footer from './Footer';
import Info from './Info'
import MidContent from './MidContent'

const Main = () => {
    return ( 
        <div className="main-wrapper">
            <Info></Info>
            <MidContent></MidContent>
            <Footer></Footer>
        </div>
     );
}
 
export default Main;