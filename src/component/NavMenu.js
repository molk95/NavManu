import React from 'react'
function NavMenu(props)  {
    return (
     <ul className="nav-menu">
        {props.menu.map(el=> <li className="nav-item">
            {el.title}
        {!el.drop?null:<ul className="dropdown-menu" >{el.drop.map(el=>
           
           <li className='dropdown-menu-list'>{el}</li>
                        )}</ul>}
        </li>)        }
     </ul>   
            
      
    )
}
export default NavMenu;
