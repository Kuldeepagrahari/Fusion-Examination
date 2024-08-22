import React, { useState } from 'react';
import './Home.css'; // Make sure to link the CSS file

const Home = () => {
    const [activeTab, setActiveTab] = useState('Announcements');
    const [notifications, setNotifications] = useState([
        { id: 1, title: 'Notification Title 1', message: 'Details about notification 1.', read: false },
        { id: 2, title: 'Notification Title 2', message: 'Details about notification 2.', read: false },
        { id: 2, title: 'Notification Title 2', message: 'Details about notification 2.', read: false },
        { id: 2, title: 'Notification Title 2', message: 'Details about notification 2.', read: false },
        { id: 2, title: 'Notification Title 2', message: 'Details about notification 2.', read: false },
    ]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const markAsRead = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification) =>
                notification.id === id ? { ...notification, read: true } : notification
            )
        );
    };

    return (
        <div className="home-container">
            <div className="home-header">
                <h1>Dashboard</h1>
                <div className="home-tabs">
                    <button
                        className={`tab ${activeTab === 'Announcements' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Announcements')}
                    >
                        Announcements
                    </button>
                    <button
                        className={`tab ${activeTab === 'Notifications' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Notifications')}
                    >
                        Notifications
                    </button>
                </div>
            </div>

            <div className="home-filters">
                <input type="text" className="search-input" placeholder="Search..." />
                <select className="filter-select">
                    <option>Filter</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
                <button className="filter-btn">Apply</button>
            </div>

            <div className="notifications">
                {activeTab === 'Announcements' && (<>
                    <div className="announcement-card">
                        <h3>Announcement Title</h3>
                        <p>Details about the announcement.</p>
                    </div>
                    <div className="announcement-card">
                    <h3>Announcement Title</h3>
                    <p>Details about the announcement.</p>
                </div>
                <div className="announcement-card">
                <h3>Announcement Title</h3>
                <p>Details about the announcement.</p>
            </div><div className="announcement-card">
                <h3>Announcement Title</h3>
                <p>Details about the announcement.</p>
            </div><div className="announcement-card">
                <h3>Announcement Title</h3>
                <p>Details about the announcement.</p>
            </div><div className="announcement-card">
                <h3>Announcement Title</h3>
                <p>Details about the announcement.</p>
            </div></>
                    
                )}
                {activeTab === 'Notifications' && notifications.map((notification) => (
                    <div className="notification-card" key={notification.id}>
                        <div className="notification-info">
                            <h3>{notification.title}</h3>
                            <p>{notification.message}</p>
                        </div>
                        {!notification.read ? (
                            <button className="mark-read-btn" onClick={() => markAsRead(notification.id)}>
                                Mark as Read
                            </button>
                        ) : (
                            <span className="read-notice">Read</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
