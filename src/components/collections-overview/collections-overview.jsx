import React from 'react';
import './collections-overview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import  CollectionPreview  from '../collection-preview/collection-preview';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';



const collectionsOverview = ({collections}) => (

        <div className = 'collection-overview' > {
            collections.map(({ id, ...otherCollectionProps }) => ( 
            <CollectionPreview key = { id } {...otherCollectionProps }/>
            ))
        } </div>
    )

    const MapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
})

export default  connect(MapStateToProps)(collectionsOverview)