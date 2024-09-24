import React from 'react';
import './Feed.css';

function Feed() {
  const posts = [
    {
      id: 1,
      username: 'nature_lover',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      likes: 341,
      comments: 45,
    },
    {
      id: 2,
      username: 'sunset_seeker',
      imageUrl: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
      likes: 512,
      comments: 89,
    },
    {
      id: 3,
      username: 'mountain_hiker',
      imageUrl: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
      likes: 978,
      comments: 123,
    },
    {
      id: 4,
      username: 'ocean_dreamer',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      likes: 642,
      comments: 50,
    },
    {
      id: 5,
      username: 'city_wanderer',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      likes: 711,
      comments: 67,
    },
    {
      id: 6,
      username: 'adventure_junkie',
      imageUrl: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80',
      likes: 834,
      comments: 102,
    },
    {
      id: 7,
      username: 'foodie_life',
      imageUrl: 'https://themeisle.com/blog/wp-content/uploads/2024/06/Online-Image-Optimizer-Test-Image-JPG-Version.jpeg',
      likes: 659,
      comments: 87,
    },
    {
      id: 8,
      username: 'artsy_soul',
      imageUrl: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df',
      likes: 488,
      comments: 49,
    },
    {
      id: 9,
      username: 'travel_fever',
      imageUrl: 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg',
      likes: 362,
      comments: 41,
    },
    {
      id: 10,
      username: 'minimalist_love',
      imageUrl: 'https://assets.monica.im/tools-web/_next/static/media/imageGeneratorFeatureIntro1.9f5e7e23.webp',
      likes: 901,
      comments: 120,
    },
    {
      id: 11,
      username: 'fashion_guru',
      imageUrl: 'https://images.unsplash.com/photo-1499013819532-e4ff41b00669',
      likes: 540,
      comments: 58,
    },
    {
      id: 12,
      username: 'dreamscape_vision',
      imageUrl: 'https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-800x525.jpg',
      likes: 400,
      comments: 48,
    },
    {
      id: 13,
      username: 'sunset_lover',
      imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
      likes: 920,
      comments: 95,
    },
    {
      id: 14,
      username: 'wanderlust_life',
      imageUrl: 'https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP',
      likes: 620,
      comments: 75,
    },
    {
      id: 15,
      username: 'ocean_vibes',
      imageUrl: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
      likes: 490,
      comments: 50,
    },
    {
      id: 16,
      username: 'wild_heart',
      imageUrl: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80',
      likes: 430,
      comments: 42,
    },
    {
      id: 17,
      username: 'mountain_muse',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww',
      likes: 350,
      comments: 55,
    },
    {
      id: 18,
      username: 'nature_soul',
      imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
      likes: 640,
      comments: 70,
    },
    {
      id: 19,
      username: 'road_trip_vibes',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlT_-PpQJbt3DsWOZDQYohRy4YF8ck1n8PA&s',
      likes: 865,
      comments: 110,
    },
    {
      id: 20,
      username: 'city_lights',
      imageUrl: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg',
      likes: 417,
      comments: 54,
    },
    {
      id: 21,
      username: 'desert_drifter',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      likes: 598,
      comments: 44,
    },
    {
      id: 22,
      username: 'biker_spirit',
      imageUrl: 'https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp',
      likes: 748,
      comments: 88,
    },
    {
      id: 23,
      username: 'zen_garden',
      imageUrl: 'https://www.w3schools.com/howto/img_forest.jpg',
      likes: 328,
      comments: 22,
    },
    {
      id: 24,
      username: 'mountain_trails',
      imageUrl: 'https://st.depositphotos.com/1057668/4156/i/450/depositphotos_41568091-stock-photo-seljalandfoss-waterfall.jpg',
      likes: 640,
      comments: 72,
    },
    {
      id: 25,
      username: 'forest_escapes',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_640.jpg',
      likes: 764,
      comments: 94,
    },
    {
      id: 26,
      username: 'quiet_moments',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      likes: 675,
      comments: 68,
    },
    {
      id: 27,
      username: 'sky_high',
      imageUrl: 'https://www.w3schools.com/w3css/img_lights.jpg',
      likes: 799,
      comments: 78,
    },
    {
      id: 28,
      username: 'wildlife_explorer',
      imageUrl: 'https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp',
      likes: 584,
      comments: 60,
    },
    {
      id: 29,
      username: 'urban_escapist',
      imageUrl: 'https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      likes: 498,
      comments: 49,
    },
    {
      id: 30,
      username: 'minimalist_vibes',
      imageUrl: 'https://pixlr.com/images/generator/how-to-generate.webp',
      likes: 903,
      comments: 110,
    },
  ];

  return (
    <div>
      <h1 className="title">Feed</h1>
      <div className="feed">
        {posts.map((post) => (
          <div
            key={post.id}
            className="post"
          >
            <img
              src={post.imageUrl}
              alt="Post"
              className="post-image"
            />
            <div className="post-info">
              <p>{post.username}</p>
              <div className="post-actions">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
