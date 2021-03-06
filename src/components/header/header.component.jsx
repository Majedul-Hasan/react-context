//****   context use code 


import React, {useContext,useState}  from 'react';
import { Link } from 'react-router-dom';



import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

import  CurrentUserContext from "../../contexts/current-user/current-user.context";
// import  CartContext from "../../contexts/cart/cart.context";

import  {CartContext} from "../../provider/cart/cart.provider";


const Header = () =>{
  const currentUser = useContext(CurrentUserContext);

/**
 * NO NEED AFTER cart.provider
  const [hidden, setHidden] = useState(true)
  const toggleHidden =()=>setHidden(!hidden)
 */

const {hidden}= useContext(CartContext)
 
 
 return(
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}

      {/* <CartContext.Provider value={
        {
        hidden,
        toggleHidden
        }
      }>
        <CartIcon />

      </CartContext.Provider> */}
      
      <CartIcon />

    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
}



export default Header;



/**
    ***** ** redux code 

    
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);



    */