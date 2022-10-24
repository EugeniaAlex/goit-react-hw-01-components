import css from './friendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from "../friendListItem/FriendListItem";

export default function FriendList({friends}) {
    
    const friendsItem = friends.map(friend =>
    (<FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
    />));
    return <ul className={css.friendList}>{friendsItem}</ul>;
};

FriendList.propTypes = {
    props: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),),
};