import Adres from '../Adres';
import CarName from '../CarName';
import './index.css'

function User(props) {
     const{firstName, lastName, address
, cars,          image, phone, email} = props.user;
     return(

          <div className='user'>
                      <img src={image} className='img' alt="" />
                      <h5>{firstName} {lastName}</h5>
                      <div className="manzil">
                           <p>Telefon <span>{phone}</span></p>
                           <p>Email <span></span>{email}</p>
                      </div>
                      <Adres addres={address} />
                      <CarName cars={cars} />
     </div>
     )

}

export default User;