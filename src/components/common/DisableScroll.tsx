// @/components/DisableBodyScroll.js
import React, { Component } from 'react';

class DisableBodyScroll extends Component {
  componentDidMount() {
    document.querySelector("body").classList.add("overflow-y-hidden");
    document.querySelector("html").classList.add("overflow-y-hidden")
  }

  componentWillUnmount() {
    document.querySelector("body").classList.remove("overflow-y-hidden");
    document.querySelector("html").classList.remove("overflow-y-hidden");
  }

  render() {
    return false;
  }
}

export default DisableBodyScroll;