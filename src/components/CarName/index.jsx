import './index.css'
function CarName(props){
     const name = props.cars;
     
     return(
          <div className='carname'>
               <div className="div"></div>
               <div  className='pcarname'>
{
name.length > 0 && name.map(function(e){
     return(
          <span>{e}</span>
     )
})
}
               </div>
          </div>
     )
}

export default CarName;