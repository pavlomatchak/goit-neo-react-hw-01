import Profile from './components/profile/Profile';
import FriendsList from './components/friends-list/FriendsList';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import userData from './user.json';
import friends from './friends.json';
import transactions from './transactions.json';
import './App.css'

function App() {
  return (
    <>
      <Profile
        avatar={userData.avatar} 
        location={userData.location} 
        username={userData.username} 
        stats={userData.stats} 
        tag={userData.tag} />

      <FriendsList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  )
}

export default App
