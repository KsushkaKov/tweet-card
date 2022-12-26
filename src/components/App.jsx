import { User } from './User/User';
import { Component } from 'react';

export class App extends Component {
  state = {
    tweets: 125,
    followers: 100500,
    isFollowing: false,
  };

  componentDidMount() {
    const follower = localStorage.getItem('followers');
    const followingStatus = localStorage.getItem('folowwStatus');
    const parseFollowers = JSON.parse(follower);
    const parseStatus = JSON.parse(followingStatus);
    if (parseFollowers) {
      this.setState({ followers: parseFollowers });
    }
    if (parseStatus) {
      this.setState({ isFollowing: parseStatus });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.followers !== this.setState.followers) {
      localStorage.setItem('followers', JSON.stringify(this.state.followers));
    }
    if (prevState.isFollowing !== this.setState.isFollowing) {
      localStorage.setItem(
        'folowwStatus',
        JSON.stringify(this.state.isFollowing)
      );
    }
  }

  onToggleClick = () => {
    this.setState(prevState => {
      return {
        followers: prevState.isFollowing
          ? prevState.followers - 1
          : prevState.followers + 1,
        isFollowing: !prevState.isFollowing,
      };
    });
  };

  render() {
    const { tweets, followers, isFollowing } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <User
          tweets={tweets}
          followers={followers}
          onToggleClick={this.onToggleClick}
          isFollowing={isFollowing}
        />
      </div>
    );
  }
}
