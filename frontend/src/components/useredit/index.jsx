
import { useSelector } from 'react-redux';

import "./useredit.css";




function Useredit() {

    const firstName = useSelector((state) => state.signinSlice.firstName);
    const lastName = useSelector((state) => state.signinSlice.lastName);

    return (
        <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        <button className="edit-button">Edit Name</button>
        </div>
    )
}






export default Useredit;