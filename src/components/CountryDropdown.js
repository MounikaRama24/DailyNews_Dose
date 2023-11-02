import React from 'react';
import Select from 'react-select';
// import  { useState } from "react";
const CountryDropdown = ({ selectedCountry, setSelectedCountry,props }) => {
  // const [mode, setMode] = useState("light");
  // const [btn, setBtn] = useState("Enable Darkmode");
  // const [color, setColor] = useState("black");


  // const togggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     // setBtn("Disable DarkMode");
  //     // setColor("white");
  //     document.body.style.backgroundColor = "#042743";
  //     document.body.style.color = "white";
  //   } else {
  //     setMode("light");
  //     // setBtn("Enable DarkMode");
  //     // setColor("black");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "black";
  //   }
  // };






    const countries = [
      { value: 'ae', label: 'United Arab Emirates' },
      { value: 'ar', label: 'Argentina' },
      { value: 'at', label: 'Austria' },
      { value: 'au', label: 'Australia' },
      { value: 'be', label: 'Belgium' },
      { value: 'bg', label: 'Bulgaria' },
      { value: 'br', label: 'Brazil' },
      { value: 'ca', label: 'Canada' },
      { value: 'ch', label: 'Switzerland' },
      { value: 'cn', label: 'China' },
      { value: 'co', label: 'Colombia' },
      { value: 'cu', label: 'Cuba' },
      { value: 'cz', label: 'Czech Republic' },
      { value: 'de', label: 'Germany' },
      { value: 'eg', label: 'Egypt' },
      { value: 'fr', label: 'France' },
      { value: 'gb', label: 'United Kingdom' },
      { value: 'gr', label: 'Greece' },
      { value: 'hk', label: 'Hong Kong' },
      { value: 'hu', label: 'Hungary' },
      { value: 'id', label: 'Indonesia' },
      { value: 'ie', label: 'Ireland' },
      { value: 'il', label: 'Israel' },
      { value: 'in', label: 'India' },
      { value: 'it', label: 'Italy' },
      { value: 'jp', label: 'Japan' },
      { value: 'kr', label: 'South Korea' },
      { value: 'lt', label: 'Lithuania' },
      { value: 'lv', label: 'Latvia' },
      { value: 'ma', label: 'Morocco' },
      { value: 'mx', label: 'Mexico' },
      { value: 'my', label: 'Malaysia' },
      { value: 'ng', label: 'Nigeria' },
      { value: 'nl', label: 'Netherlands' },
      { value: 'no', label: 'Norway' },
      { value: 'nz', label: 'New Zealand' },
      { value: 'ph', label: 'Philippines' },
      { value: 'pl', label: 'Poland' },
      { value: 'pt', label: 'Portugal' },
      { value: 'ro', label: 'Romania' },
      { value: 'rs', label: 'Serbia' },
      { value: 'ru', label: 'Russia' },
      { value: 'sa', label: 'Saudi Arabia' },
      { value: 'se', label: 'Sweden' },
      { value: 'sg', label: 'Singapore' },
      { value: 'si', label: 'Slovenia' },
      { value: 'sk', label: 'Slovakia' },
      { value: 'th', label: 'Thailand' },
      { value: 'tr', label: 'Turkey' },
      { value: 'tw', label: 'Taiwan' },
      { value: 'ua', label: 'Ukraine' },
      { value: 'us', label: 'United States' },
      { value: 've', label: 'Venezuela' },
      { value: 'za', label: 'South Africa' },
      // Add more countries here as needed
    ];

    const selectedOption = countries.find((country) => country.value === selectedCountry);

  const dropdownContainerStyle = {
    position: 'absolute',
    top: '80px',
    right: '20px',
    width: '150px',
    fontSize: '14px',
    color: 'black',
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '150px',
      fontSize: '14px',
    }),
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption.value);
  };

  return (
    <div 
    className="corner mx-4"
      // style={{
      //   position: 'absolute',
      //   top: 0,
      //   left: 0,
      // }}
      >
      <div style={dropdownContainerStyle}>
        <label htmlFor="chooseCountry">Choose Country:</label>
        <Select
          id="chooseCountry"
          options={countries}
          value={selectedOption}
          onChange={handleCountryChange}
          isSearchable={true}
          placeholder="Select Country"
          styles={customStyles}
        />
      </div>
      {/* <button onClick={togggleMode} style={{ color }}>
        {btn}
      </button> */}
    </div>
  );
};

export default CountryDropdown;