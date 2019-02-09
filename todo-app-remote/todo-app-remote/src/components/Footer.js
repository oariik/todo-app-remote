import React from 'react'
import { Button} from 'semantic-ui-react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div style={{display:'flex' }}>
    <label>  </label>
    &nbsp;&nbsp;&nbsp;&nbsp;
   
    <Button.Group size='mini'>
          <FilterLink filter="SHOW_ALL">
              <li> 
                <a href="#/all">All todos</a>
              </li> 
          </FilterLink>
       <Button.Or />
          <FilterLink filter="SHOW_ACTIVE">
              <li> 
                <a href="#/active">Active</a>
              </li> 
          </FilterLink>
       <Button.Or />
          <FilterLink filter="SHOW_COMPLETED">
              <li>
                  <a href="#/completed">Completed</a>
              </li>
          </FilterLink>
       <Button.Or />
          <FilterLink filter="SHOW_DELETED">
              <li> 
                <a href="#/delete">Delete</a>
              </li> 
          </FilterLink>
    </Button.Group>   
</div>
)

export default Footer;
