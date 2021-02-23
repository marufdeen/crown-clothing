import React from 'react';
import { connect } from 'react-redux'; 
import { selectCategory } from '../../redux/shop/shopSelector';
import CollectionItem from '../../components/collectionItem/CollectionItem';
import './category.scss'; 

const Category = ({category}) => {
    const { title, items } = category;
    return (
        <div className='category-page'>
            <h1>{title}</h1>
            <div className='items'>
            {
                items.map( item => <CollectionItem key={item.id} item={item} /> )
            }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    category: selectCategory(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps) (Category);