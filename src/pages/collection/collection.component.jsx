


import React, {useContext} from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';


import './collection.styles.scss';

import CollectionContext  from "../../contexts/collections/collections.context";



const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionContext)
  const collection = collections[match.params.collectionId];
  


  const { title, items } = collection;
  return (
   
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
   
    
    
  );
};


export default CollectionPage;


/*

****   context use code static using useContext hook object (easy) **

import React, {useContext} from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';


import './collection.styles.scss';

import CollectionContext  from "../../contexts/collections/collections.context";



const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionContext)
  const collection = collections[match.params.collectionId];
  


  const { title, items } = collection;
  return (
   
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
   
    
    
  );
};


export default CollectionPage;

*/




/** ****** context use code static using CollectionContext.Consumer object  **

//context use code static 



import React from 'react';


import CollectionItem from '../../components/collection-item/collection-item.component';


import './collection.styles.scss';

import CollectionContext  from "../../contexts/collections/collections.context";



const CollectionPage = ({ match }) => {


  
  return (
    
    <CollectionContext.Consumer>
    {
      collections =>{  // we receive  collections from Collecti onContext.Consumer

        const collection = collections[match.params.collectionId]; 
        const { title, items } = collection;
         return (
        
          <div className='collection-page'>
          <h2 className='title'>{title}</h2>
          <div className='items'>
            {items.map(item => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
         )
      }
    }
    </CollectionContext.Consumer>
    
  );
};

export default CollectionPage;


//context use code static 

*/





/**
    ***** ** redux code 
    
import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';




import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  


  const { title, items } = collection;
  return (
   
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
   
    
    
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);


*/





