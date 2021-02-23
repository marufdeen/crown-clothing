import React from 'react'; 
import { Route } from 'react-router-dom';
import CollectionsOverview from './../../components/collectionsOverview/CollectionsOverview';
import Category from '../category/Category';
const ShopPage  = ({match}) =>  (
           <div className='shop-page'>
          <Route exact path={`${match.path}`} component={CollectionsOverview} />
          <Route path={`${match.path}/:categoryId`} component={Category} />
           </div> 
        ); 
export default ShopPage;