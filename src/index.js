import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile } from 'components/profile/Profile';
import user from './components/profile/user';
import data from './components/statistics/data';
import { Statistics } from './components/statistics/Statistics';
import { FriendList } from 'components/friends/FriendList';
import friends from './components/friends/friends';
import { TransactionHistory } from './components/transactions/TransactionHistory';
import transactions from './components/transactions/transactions';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </App>
  </React.StrictMode>
);
