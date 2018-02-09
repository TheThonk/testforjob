import React, { Component } from 'react';
import App from '../App.js';

export default function UsersList({ users }) {
  const userElems = users.map(user =>
    <li key = {user.id}>
  )
}
