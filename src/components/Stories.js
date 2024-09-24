import React from 'react';
import './Stories.css';

function Stories() {
  const stories = [
    {
      id: 'user_1',
      username: 'john_doe',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 'user_2',
      username: 'jane_smith',
      profileImageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 'user_3',
      username: 'michael_ross',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 'user_4',
      username: 'emma_jones',
      profileImageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 'user_5',
      username: 'david_taylor',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: 'user_6',
      username: 'sarah_brown',
      profileImageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      id: 'user_7',
      username: 'chris_wilson',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      id: 'user_8',
      username: 'linda_white',
      profileImageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    {
      id: 'user_9',
      username: 'robert_miller',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    {
      id: 'user_10',
      username: 'elizabeth_davis',
      profileImageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    {
      id: 'user_11',
      username: 'james_jackson',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
    {
      id: 'user_12',
      username: 'patricia_martinez',
      profileImageUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
      id: 'user_13',
      username: 'charles_thompson',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    {
      id: 'user_14',
      username: 'barbara_anderson',
      profileImageUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
    },
    {
      id: 'user_15',
      username: 'william_clark',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
  ];
  return (
    <div>
      <h1 className="title">Stories</h1>
      <div className="stories">
        {stories.map((story) => (
          <div
            key={story.id}
            className="story"
          >
            <img
              src={story.profileImageUrl}
              alt={story.username}
              className="story-img"
            />
            <p>{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
