import './Header.css'
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className="headers">
            <div className='home'> <Link to="/">Home</Link></div>
            <div className='history'> <Link to="/history">History</Link></div>
        </div>
    )
}

export default Header;