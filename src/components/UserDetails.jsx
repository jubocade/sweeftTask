import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import User from './User';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser, removeUser, setUserFriends, setFriendsPage, setFriendsLoading} from '../redux/actions/actions';
import '../styles/UserDetails.css';
import Loading from './Loading';

export const UserDetails = () => {
    //Getting states, dispatch and userId
    const selectedUser = useSelector(state => state.setSelectedUserReducer);
    const userFriends = useSelector(state => state.setUserFriendsReducer);
    const friendsPage = useSelector(state => state.setFriendsPageReducer);
    const friendsLoading = useSelector(state => state.setFriendsLoadingReducer);
    const dispatch = useDispatch()
    const {userId} = useParams();

    //Fetching details of the selected user
    const fetchUserDetails = () => {
        fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`)
            .then(res => res.json())
            .then(data => {
                 dispatch(setSelectedUser(data));
              }
            )
            .catch(err => console.log('Error message: ', err))
    }

    //Fetching user Friends
    const fetchUserFriends = () => {
        dispatch(setFriendsLoading(true));
        fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${friendsPage}/15`)
            .then(res => res.json())
            .then(data => {
                    dispatch(setUserFriends( data.list.filter(el => {
                        return el.id.toString() !== userId
                    })))
            })
            .catch(err => console.log('Error message: ', err))
            .finally(() => {
                dispatch(setFriendsLoading(false))
            })
    }

   //Here we are calling function in which fetching of selected user details is happening, everytime userId state changes
    useEffect(() => {
        if(userId && userId!=='') fetchUserDetails();

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        
        return () => {
            dispatch(removeUser())
        }
        
    }, [userId])

    //Here we are calling function in which fetching of selected user's friends is happening, everytime page and userId states change
    useEffect(() => {
        fetchUserFriends()
    }, [friendsPage, userId])
  
      const handleScroll = () => {
          dispatch(setFriendsPage());
      }
  
      window.onscroll = function () {
          if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
              handleScroll();
          }
      }

    return (
        <div className="userDetails">
            {/* Displaying details of selected user */}
            {
                Object.keys(selectedUser).length === 0 ? (
                    <div>Loading...</div>
                ) : (
            <div className="user-about">
                <div className="user-details-image">
                    <img src={selectedUser.imageUrl} alt="user-image" />
                </div>

                <div className="user-info">
                    <fieldset>
                        <legend>Info</legend>
                        <div className="row1">
                            <h3>
                                 <span>{selectedUser.prefix} </span>
                                 <span>{selectedUser.name} </span>
                                 <span>{selectedUser.lastName} </span>
                            </h3>
                        </div>

                        <div className="row2">
                            <div className="personal-details">
                                <span className="email-label label">
                                    Email:
                                </span>

                                <span> </span>

                                <span className="email-data">
                                    {selectedUser.email}
                                </span>
                            </div>
                            <div className="personal-details">
                               <span className="ip-address-data label">
                                    IP Address: 
                                </span> 

                                <span> </span>

                                <span className="ip-address-data">
                                    {selectedUser.ip}
                                </span>
                            </div>
                            <div className="personal-details">
                            <span className="job-area-label label">
                                    Job Area:
                                </span>

                                <span> </span>

                                <span className="job-area-data">
                                    {selectedUser.jobArea}
                                </span>
                            </div>
                            <div className="personal-details">
                            <span className="job-type-label label">
                                    Job Type:
                                </span>

                                <span> </span>

                                <span className="job-type-data">
                                    {selectedUser.jobType}
                                </span>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div className="user-address">
                    <fieldset>
                        <legend>Address</legend>
                        <div className="address-info">
                                <h3>
                                    <span>{selectedUser.company.name}</span>
                                    <span>{selectedUser.company.suffix}</span>
                                </h3>

                                <div className="personal-details">
                                    <span className="city-label label">
                                        City:
                                    </span>

                                    <span> </span>

                                    <span className="city-data">
                                        {selectedUser.address.city}
                                    </span>
                                </div>

                                <div className="personal-details">
                                    <span className="country-label label">
                                        Country:
                                    </span>

                                    <span> </span>

                                    <span className="country-data">
                                        {selectedUser.address.country}
                                    </span>
                                </div>

                                <div className="personal-details">
                                    <span className="state-label label">
                                        State:
                                    </span>

                                    <span> </span>

                                    <span className="state-data">
                                        {selectedUser.address.state}
                                    </span>
                                </div>

                                <div className="personal-details">
                                    <span className="street-label label">
                                        Street Address:
                                    </span>

                                    <span> </span>

                                    <span className="street-data">
                                        {selectedUser.address.streetAddress}
                                    </span>
                                </div>

                                <div className="personal-details">
                                    <span className="zip-label label">
                                        ZIP:
                                    </span>

                                    <span> </span>

                                    <span className="zip-data">
                                        {selectedUser.address.zipCode}
                                    </span>
                                </div>
                        </div>
                    </fieldset>
                </div>
            </div>
                )
            }

            <h1>Friends:</h1>
            <div className="friends-list">
                    <div className="friends-list-cont">
                    {/* Displaying friends of the selected user */}
                    {
                        userFriends ? (
                            userFriends.map((friend, index) => (
                                <Link key={index} to={`/user/${friend.id}`} style={{ textDecoration: 'none'}}>
                                    <User name={friend.name} lastName={friend.lastName} prefix={friend.prefix} title={friend.title} img={`${friend.imageUrl}/${friend.id}`}/>
                                </Link>
                            ))
                        ) : (
                             <div> <Loading /></div>
                        )
                    }
                    </div>


                    {
                        friendsLoading ? <h2><Loading /></h2> : ''
                    }
            </div>
        </div>
    )
}

export default UserDetails;
