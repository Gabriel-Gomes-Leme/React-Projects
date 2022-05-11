import './style.css'
export const Input = ({searchValue, change}) =>{
   return(
    <input value={searchValue} className="search-field" type="search" onChange={change} placeholder="Busque..."/> 
   )
}