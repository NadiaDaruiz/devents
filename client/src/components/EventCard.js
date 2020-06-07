import React from 'react';
import '../style/EventCard.scss';

const EventCard = ({ setIsEventClicked, setEventInfo, title, img, date, location, address, description }) => {

    return (
        <div className="event-card">
            {
                img.includes('http') ?
                    <div className="event-image to-back" style={{ backgroundImage: `url('${img}')` }} alt="test-image" />
                    :
                    <div className="event-image to-back" style={{ backgroundImage: `url('https://res.cloudinary.com/jimbocloud/image/upload/v1590935043/devents/meetup.jpg')` }} alt="test-image" />
            }
            <h3 className="event-title to-back">{title}</h3>
            <p className="event-date to-back">{date}</p>
            <p className="event-address to-back">{location}</p>
            <button onClick={() => {
                setEventInfo(
                    {
                        title: title,
                        img: img,
                        date: date,
                        location: location,
                        address: address,
                        description: description
                    }
                );
                setIsEventClicked(true);
            }} className="button see-more">See more</button>
        </div>
    );
}

export default EventCard;
