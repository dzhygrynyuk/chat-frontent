import React from "react";
import PropTypes from 'prop-types';
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Time = ({ date }) => formatDistanceToNow(date);

Time.propTypes = {
    date: PropTypes.instanceOf(Date)
};

export default Time;