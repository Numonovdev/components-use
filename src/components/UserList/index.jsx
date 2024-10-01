import User from '../User';
import './index.css'
import data from '../../assets/users/users.json'
function UserList(){
     return(
          <div className='userlist'>
               <h1>Users</h1>
               <div className="users">
                    {
                         data.length > 0 && data.map(function(value, index){
                              return(

                                   
                                   <User user = {value} id={index}/>
                              )

                         })
                    }

               </div>
          </div>
          
     )
}

export default UserList;