import React from 'react'
import axios from 'axios'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProfile } from '../../redux/auth';


const ProtectedRoutes = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const userLogin = useSelector(state => state.auth.userLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation().pathname

    const onLoginRegister = async () =>{
        if (!Object.keys(userLogin).length !== 0) {
            const token = localStorage.getItem('token');
            if (token) {
                await axios.get("http://localhost:5000/whoami", {
                    headers: {
                        Authorization: token,
                    }
                }).then(res => {
                    dispatch(setUserProfile(res.data))
                    setIsLoading(false)
                    navigate('/')
                }).catch(err => {
                    console.log(err);
                })
            }else{
                navigate('/login')
                setIsLoading(false)
              }
        }
    }

    const getAuth = () =>{
        if (!Object.keys(userLogin).length !== 0) {
            const token = localStorage.getItem('token');
            if (token) {
                axios.get("http://localhost:5000/whoami", {
                    headers: {
                        Authorization: token,
                    }
                }).then(res => {
                    dispatch(setUserProfile(res.data))
                    setIsLoading(false)
                }).catch(err => {
                    console.log(err);
                })
            }else{
                navigate('/')
                setIsLoading(false)
              }
        }
    }

    React.useEffect(() => {
        if (location === '/login' || location === '/register') {
            setTimeout(() => {
                onLoginRegister()
                }, 2000);
        }else{
            setTimeout(() => {
                getAuth()
                }, 2000);
        }
    }, [])
    return (
        <>
        {isLoading ?
            <Loading/>
            :
            userLogin ? 
            <Outlet/> 
            : 
            <Navigate to='/login'/>
            }
      </>
  )
}

export default ProtectedRoutes