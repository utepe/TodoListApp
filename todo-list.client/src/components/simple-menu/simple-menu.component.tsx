import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// TODO: gets the props (id) from the card component so that wed be able to PUT and DELETE
export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          . . .
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Edit</MenuItem> { /*TODO: calls POP up menu to change the item and then PUT */} 
          <MenuItem onClick={handleClose}>Delete</MenuItem> { /*TODO: calls DELETE method */} 
        </Menu>
      </div>
    );
  }