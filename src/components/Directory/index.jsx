import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import MenuItem from '../MenuItem';
import {} from '../../redux/directory/directory.reducer';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

function Directory() {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionsProps }) => (
        <MenuItem key={id} {...otherSectionsProps} />
      ))}
    </div>
  );
}

export default Directory;
