import PropTypes from 'prop-types';
import css from './User.module.css';
import logo from '../../images/logo.svg';
import avatar from '../../images/Hansel.png';

export const User = ({ tweets, followers, onToggleClick, isFollowing }) => {
  return (
    <div className={css.TweetCard}>
      <div className={css.Logo}>
        <img src={logo} alt="GoIT logo" />
      </div>
      <div className={css.User}>
        <span className={css.Line}></span>
        <div className={css.UserAvatar}>
          <img src={avatar} alt="" className={css.UserPicture} />
        </div>
        <p className={css.UserTweets}>{tweets} tweets</p>
        <p className={css.UserFollowers}>
          {followers.toLocaleString('en-US')} followers
        </p>
        <button
          type="button"
          className={isFollowing ? css.Active : css.Btn}
          onClick={onToggleClick}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

User.propTypes = {
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool,
};
