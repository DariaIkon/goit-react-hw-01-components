import React from "react";
import propTypes from 'prop-types';
import css from "./FriendList.module.css";

function FriendList({friends}) {
  const component = friends.map(({avatar, name, isOnline, id}) => {
    return (
      <li key={id} className={css.item}>
            <span className={`${css.isOnline} ${css[isOnline]}`}>{ isOnline}</span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
      </li>
    );
  });
    return (<ul className={css.friend_list}>
      {component}
  </ul>)
}

FriendList.propTypes = {
    isOnline: propTypes.bool.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,

}


export default FriendList;
