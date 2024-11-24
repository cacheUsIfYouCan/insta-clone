import React, {Component} from 'react';
import './PostTimestamp.css'


class PostTimestamp extends Component {
    render() {
        let shortTimestamp;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        let realTimestamp = new Date(this.props.timestamp);
        let realToday = new (Date);
        let postTimestamp = Date.parse(this.props.timestamp);
        let today = Date.parse(new Date());
        let todayDay = Math.floor(today/day);
        let timestampDay = Math.floor(postTimestamp/day);
        let todayMinutes = Math.floor(today/minute);
        let timestampMinutes = Math.floor(postTimestamp/minute);
        let todayHours = Math.floor(today/hour);
        let timestampHours = Math.floor(postTimestamp/hour);
        let todaySeconds = Math.floor(today/second);
        let timestampSeconds = Math.floor(postTimestamp/second);
        let daysAgo = (todayDay - timestampDay);
        let minutesAgo = (todayMinutes - timestampMinutes);
        let hoursAgo = (todayHours - timestampHours);
        let secondsAgo = (todaySeconds - timestampSeconds);
        if (secondsAgo <= 1) {
            shortTimestamp = "1 second ago"
        } else if ((secondsAgo > 1) && (secondsAgo < 59)) {
            shortTimestamp = `${secondsAgo} seconds ago`
        } else if (minutesAgo === 1) {
            shortTimestamp = "1 minute ago";
        } else if ((minutesAgo > 1) && (minutesAgo <= 59)) {
            shortTimestamp = `${minutesAgo} minutes ago`;
        } else if (hoursAgo == 1) {
            shortTimestamp = `${hoursAgo} hour ago`;
        } else if ((hoursAgo > 1) && (hoursAgo <= 23)) {
            shortTimestamp = `${hoursAgo} hours ago`;
        } else if ((hoursAgo > 23) && (hoursAgo < 48)) {
            shortTimestamp = "1 day ago";
        } else if ((daysAgo >= 2) && ((daysAgo <= 6))) {
            shortTimestamp = `${daysAgo} days ago`;
        } else if ((daysAgo >= 7) && ((realTimestamp.getFullYear() === realToday.getFullYear()))) {
            let monthDay = realTimestamp.toLocaleDateString ('en-us', {month:"long", day:"numeric"});
            shortTimestamp = `${monthDay}`
        } else if ((daysAgo >=7 && ((realTimestamp.getFullYear() !== realToday.getFullYear())))) {
           let monthDayYear = realTimestamp.toLocaleDateString('en-us', {month:"long", day:"numeric", year: "numeric"});
            shortTimestamp = `${monthDayYear}`
        }
        

        return (
        <div className="timestamp">
        <p>{shortTimestamp}</p>
        </div>
        )
    }
}

export default PostTimestamp;