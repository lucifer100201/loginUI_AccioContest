import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Error fetching user data:', err));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address.address}</p>
      {/* Display other user information as needed */}
    </div>
  );
};

export default Profile;
