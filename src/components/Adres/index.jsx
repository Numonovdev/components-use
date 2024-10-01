import './index.css'

function Adres(props){
     const {region, zip}= props.addres
     // console.log(region)
     return(
          <div className='adres'>
               <div className="block">
                    <div className="divadres"></div>
                    <p className='padres'>{region}</p>
               </div>
               <div className="block">
                    <div className="divadres"></div>
                    <p className='padres'>{zip}</p>
               </div>
          </div>
     )
}

export default Adres;