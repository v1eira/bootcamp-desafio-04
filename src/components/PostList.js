import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
    state = {
        posts: [
          {
            id: 1,
            author: {
              username: 'Ewerson Vieira',
              avatar: 'https://avatars0.githubusercontent.com/u/22565566?s=400&u=3fd9c670ab6847482bc3ea79c91786c02f435e46&v=4'
            },
            date: '14 Aug 2019',
            content: 'Fala meus amigos',
            comments: [
              {
                id: 2,
                author: {
                  username: 'Vilaça',
                  avatar: 'https://avatars1.githubusercontent.com/u/9597125?s=400&v=4'
                },
                date: '14 Aug 2019',
                content:
                  'Oloko'
              }
            ]
          },
          {
            id: 3,
            author: {
              username: 'Carlitos',
              avatar: 'https://avatars0.githubusercontent.com/u/13247527?s=400&v=4'
            },
            date: '14 Aug 2019',
            content:
              'Sou filho do Calhau. Oloko',
            comments: [
              {
                id: 4,
                author: {
                  username: 'Filipe Deschamps',
                  avatar: 'https://avatars2.githubusercontent.com/u/4248081?s=400&v=4'
                },
                date: '14 Aug 2019',
                content:
                  'Eita!'
              },
              {
                id: 5,
                author: {
                  username: 'Diego Fernandes',
                  avatar: 'https://avatars1.githubusercontent.com/u/2254731?s=400&v=4'
                },
                date: '14 Aug 2019',
                content:
                  'Hm'
              }
            ]
          }
        ]
      };
    
    render() {
        const { posts } = this.state;
        
        return (
        <div className="post-list">
            {posts.map(post => (
                <PostItem key={post.id} {...post}/>
            ))}
        </div>
        );
    }
}

export default PostList;