import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';


const Settings = (props) => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(false);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    // Implement theme change logic
  };

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
    // Implement notifications toggle logic
  };

  return (
    <div className="settings-container ms-4">
      <div className="d-flex align-items-center">
        <button className="btn btn-primary" onClick={props.toggleSettings}>
        <FontAwesomeIcon icon={faCog} />
 Settings
        </button>
      </div>
      {props.isOpen && (
        <div className="settings-content">
          <h2>Settings</h2>
          <label>
            Theme:
            <select value={theme} onChange={handleThemeChange}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              
            </select>
          </label>
          <label>
            Notifications:
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationsChange}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default Settings;
