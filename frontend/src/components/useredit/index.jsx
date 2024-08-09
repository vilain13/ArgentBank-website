
import { useSelector, useDispatch } from 'react-redux';
import { startEditing, cancelEditing, updateNewUserName, updateUserName } from '../../store/slices';
import { changeUsername } from '../../api/';
import "./useredit.css";



function Useredit() {
    const dispatch = useDispatch();
    const { firstName, lastName, userName: currentUserName, newUserName, isEditing, token } = useSelector((state) => state.signinSlice); // avec valeurs déstructurées directement à partir de l'état de votre slice Redux

  
    
    const handleEditClick = () => {
        dispatch(updateNewUserName(currentUserName));
        dispatch(startEditing());
      };
    
      const handleCancelClick = () => {
        dispatch(cancelEditing());
      };

      const handleSaveClick = async (event) => {
        event.preventDefault();
      
        try {
          await changeUsername(newUserName, token);
          dispatch(updateUserName(newUserName));
          dispatch(cancelEditing());
        } catch (error) {
          console.error('Echec de mise à jour du userName:', error);
        }
      };

    return (
        <div className="header">
            {!isEditing ? (
                <>
                    <h1>Welcome back<br />{firstName} {lastName}!</h1>
                    <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
                </>
            ) : (
                <form>
                    <h2 className='userEdit-title'>Edit user info</h2>
                    <div className='flex-useredit'>
                      <div className='contain-useredit'>
                        <div className='item-useredit'>
                            <label>User name: </label>
                            <input
                                type="text" value={newUserName} onChange={(e) => dispatch(updateNewUserName(e.target.value))}/>
                        </div>
                        <div className='display-item-useredit'>
                            <label>First name: </label>
                            <input type="text" id="firstName" name="firstName" value={firstName} disabled></input>
                        </div>
                        <div className='display-item-useredit'>
                            <label>Last name: </label>
                            <input type="text" id="lasttName" name="lastName" value={lastName} disabled></input>
                        </div>
                      </div>
                    </div>
                    <div className='buttons-useredit'>
                      <button className="save-button" onClick={handleSaveClick}>Save</button>
                      <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                    </div>
                </form>

            )}
        </div>  
    )
}



export default Useredit;


