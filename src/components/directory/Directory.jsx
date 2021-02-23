import React from 'react'; 
import {connect} from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from './../../redux/directory/directorySelector';
import MenuItem from './../menuItem/MenuItem';
import './directory.scss'; 

const Directory = ({ sections }) =>  (
      <div className="directory-menu">
        { sections.map(( { id, ...otheSectionProps} ) => ( 
            <MenuItem key = {id}  {...otheSectionProps} />
            ) 
         ) }
      </div>
    );  
const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySections
})
export default connect(mapStateToProps) (Directory);
