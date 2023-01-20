import React from 'react';
import studentregister from './studentregister';
import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
      <MenuItem icon="users" to="/entites/studentregister">
        student registrater
      </MenuItem>
      <MenuItem icon="tachometer-alt" to="/admin/metrics">
        Student Data
      </MenuItem>
      <MenuItem icon="heart" to="/admin/health">
        Student Activity
      </MenuItem>

      <MenuItem icon="tasks" to="/admin/logs">
        Logout Student
      </MenuItem>
    </>
  );
};

export default EntitiesMenu;
