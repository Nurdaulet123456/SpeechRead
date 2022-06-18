// import React from 'react';

function useAuth(client_id, redirect_uri, AUTH_URL, response_type) {
    const registration = `${AUTH_URL}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`;

    return registration
}

export default useAuth;