import React from 'react';
import { Helmet } from 'react-helmet'

const EditProfile = () => {
  let user = JSON.parse(localStorage.getItem('user-info'))
  return (
    <>
    <Helmet>
      <title>{`Edit Profile (${user && user.name})`}</title>
    </Helmet>
      <div>
      asdasd
    </div>
    </>
  );
}

export default EditProfile;
