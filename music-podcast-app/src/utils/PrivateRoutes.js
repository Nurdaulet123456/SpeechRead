import { Route, Redirect } from 'react-router-dom'


const PrivateRoutes = ({children, ...res}) => {
    let auth = {'token': localStorage.getItem('token')};

    return (
        <Route {...res}>
            {
                !auth.token 
                ?
                 <Redirect to='/'/>
                 :
                 children
            }
        </Route>
    )
}


export default PrivateRoutes;