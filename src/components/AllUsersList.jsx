import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setAllUsers, setLoading, setPage} from '../redux/actions/actions';
import User from './User';
import '../styles/AllUsersList.css';
import Loading from './Loading';


const AllUsersList = () => {
    // Getting states and dispatch
    const allUsers = useSelector(state => state.setAllUsersReducer);
    const page = useSelector(state => state.setPageReducer);
    const loading = useSelector(state => state.setLoadingReducer);
    const dispatch = useDispatch();
    //Fetching all users' data
    const fetchAllUsers = () => {
        dispatch(setLoading(true))
        fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/15`)
        .then(res => res.json())
        .then(data => {
            dispatch(setAllUsers(data.list));
        })
        .catch(err => console.log('Error message: ', err))
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
    //Here we are calling function in which fetching is happening, everytime page state changes
    useEffect(() => {
      fetchAllUsers();
    }, [page])

    //Function which will be called when page is scrolled all the way down
    const handleScroll = () => {
        dispatch(setPage());
    }

    //Implementing infinite scroll logic
    window.onscroll = function () {
        if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            handleScroll();
        }
    }


    return (
        <div className="allUsersList">
            <div className="allUsersList-cont">
                {/* Displaying all the users */}
                {
                    allUsers ? (
                        allUsers.map((user, index) => (
                            <Link key={index} to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
                                <User name={user.name} lastName={user.lastName} prefix={user.prefix} title={user.title} img={`${user.imageUrl}/${user.id}`}/>
                         </Link>
                     ))
                 ) : (
                    <div> <Loading /> </div>
                 )
                 }
            </div>

            {
                loading ? <h2><Loading /></h2> : ''
            }
        </div>
    )
}

export default AllUsersList;
