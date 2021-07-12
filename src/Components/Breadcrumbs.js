import '../Assets/Css/navigation.css';
import {NavLink} from 'react-router-dom';

function Breadcrumbs({ paths }) {
    const links = paths.map((path, index) => {
        if (path.link) {
            return <li key={index} className="breadcrumb-item"><NavLink to={path.link}>{path.label}</NavLink></li>
        }
        return <li key={index} className="breadcrumb-item active" aria-current="page">{path.label}</li>
    })

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb mt-4">
                {links}
            </ol>
        </nav>

    )
}

export default Breadcrumbs;