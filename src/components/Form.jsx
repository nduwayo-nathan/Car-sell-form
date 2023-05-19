import React, { useState } from 'react';
import './Form.css';

const Form=()=> {
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [condition, setCondition] = useState('');
  const [features, setFeatures] = useState([]);
  const [transmission, setTransmission] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [contactNumber, setContactNumber] = useState('');

  const handleCarMakeChange = (event) => {
    setCarMake(event.target.value);
  };

  const handleCarModelChange = (event) => {
    setCarModel(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMileageChange = (event) => {
    setMileage(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleFeaturesChange = (event) => {
    const feature = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setFeatures([...features, feature]);
    } else {
      setFeatures(features.filter((f) => f !== feature));
    }
  };

  const handleTransmissionChange = (event) => {
    setTransmission(event.target.value);
  };

  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='main'>
        <div className="Form">   
        <h1>Car Sell App Form</h1>
        <form onSubmit={handleSubmit}>
            <label for="carMake">Car Make:</label>
            <input
            type="text"
            id="carMake"
            name="carMake"
            value={carMake}
            onChange={handleCarMakeChange}
            required
            />

            <label for="carModel">Car Model:</label>
            <input
            type="text"
            id="carModel"
            name="carModel"
            value={carModel}
            onChange={handleCarModelChange}
            required
            />

            <label for="year">Year:</label>
            <input
            type="date"
            id="year"
            name="year"
            value={year}
            onChange={handleYearChange}
            required
            />

            <label for="mileage">Mileage:</label>
            <input
            type="number"
            id="mileage"
            name="mileage"
            value={mileage}
            onChange={handleMileageChange}
            required
            />

            <label>Condition:</label>
            <div>
            <label for="excellent">
                <input
                type="radio"
                id="excellent"
                name="condition"
                value="Excellent"
                checked={condition === 'Excellent'}
                onChange={handleConditionChange}
                required
                />
                Excellent
            </label>
            <label for="good">
                <input
                type="radio"
                value="Good"
                checked={condition === 'Good'}
                onChange={handleConditionChange}
                required
                />
                Good
            </label>
            <label for="fair">
                <input
                type="radio"
                value="Fair"
                checked={condition === 'Fair'}
                onChange={handleConditionChange}
                required
                />
                Fair
            </label>
            <label for="poor">
                <input
                type="radio"
                value="Poor"
                checked={condition === 'Poor'}
                onChange={handleConditionChange}
                required
                />
                Poor
            </label>
            </div>

            <label>Features:</label>
            <div>
            <label for="airConditioning">
                <input
                type="checkbox"
                value="Air Conditioning"
                checked={features.includes('Air Conditioning')}
                onChange={handleFeaturesChange}
                />
                Air Conditioning
            </label>
            <label for="powerSteering">
                <input
                type="checkbox"
                value="Power Steering"
                checked={features.includes('Power Steering')}
                onChange={handleFeaturesChange}
                />
                Power Steering
            </label>
            <label for="powerWindows">
                <input
                type="checkbox"
                value="Power Windows"
                checked={features.includes('Power Windows')}
                onChange={handleFeaturesChange}
                />
                Power Windows
            </label>
            <label for="abs">
                <input
                type="checkbox"
                value="ABS"
                checked={features.includes('ABS')}
                onChange={handleFeaturesChange}
                />
                ABS
            </label>
            <label for="navigationSystem">
                <input
                type="checkbox"
                value="Navigation System"
                checked={features.includes('Navigation System')}
                onChange={handleFeaturesChange}
                />
                Navigation System
            </label>
            </div>

            <label for="transmission">Transmission:</label>
            <select
            value={transmission}
            onChange={handleTransmissionChange}
            required
            >
            <option value="">Select</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
            </select>

            <label for="priceRange">Price Range:</label>
            <input
            type="range"
            min="0"
            max="100000"
            value={priceRange[1]}
            onChange={(event) =>
                handlePriceRangeChange([priceRange[0], Number(event.target.value)])
            }
            
            />

            <label for="contactNumber">Contact Number:</label>
            <input
            type="text"
            value={contactNumber}
            onChange={handleContactNumberChange}
            required
            />
            <div className='submit'>
            <button type="submit">Submit</button>
            </div>
        </form>
        </div>
        <div className="sideShow">
            <h1>This is your choice</h1>
            <div className='carMake'>Make: {carMake}</div>
            <div className='carModel'>Model: {carModel}</div>
            <div className='year'>Date: { year}</div>
            <div className="mileage">Mileage: { mileage}</div>
            <div className='condition'>Condition: {condition}</div>
            <div className='features'>Freature: <span>{features}</span></div>
            <div className='transmission'>Transmission: {transmission}</div>
            <div className='priceRange'>Price: { priceRange} $</div>
            <div className='contactNumber'>NUmber: { contactNumber}</div>
        </div>
    </div>
  );
}

export default Form;
