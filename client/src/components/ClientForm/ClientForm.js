import React from "react";

const ClientForm = ({ onFormSubmit, onFirstNameChange, firstNameValue, onLastNameChange, lastNameValue, onAgeChange, ageValue, onGenderChange, genderValue, onContactChange, contactValue, onEmailChange, emailValue, onAddressChange, addressValue, onVisitPurposeChange, visitPurposeValue, onEntryTimeChange, entryTimeValue, onExitTimeChange, exitTimeValue, onVulnerabilityChange, vulnerabilityValue }) => {

    return (
        <div className="client-form">
            <div className="container">
                <h2>Add New Client</h2>
                <form onSubmit={onFormSubmit} className="row g-2">
                    <div className="col-md-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input 
                            type="text" required 
                            className="form-control" 
                            id="firstName" name="firstName"
                            autoComplete="given-name"
                            value={firstNameValue} 
                            onChange={onFirstNameChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input 
                            type="text" required 
                            className="form-control" 
                            id="lastName" name="lastName"
                            autoComplete="family-name"
                            value={lastNameValue} 
                            onChange={onLastNameChange} 
                        />
                    </div>
                    <div className="col-md-1">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input 
                            type="number" required
                            className="form-control"
                            id="age" name="age"
                            autoComplete="off"
                            value={ageValue}
                            onChange={onAgeChange}
                        />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select 
                            className="form-select"
                            id="gender" name="gender"
                            value={genderValue}
                            onChange={onGenderChange}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="contact" className="form-label">Contact</label>
                        <input 
                            type="text" required
                            className="form-control"
                            id="contact" name="contact" 
                            autoComplete="tel-national"
                            value={contactValue}
                            onChange={onContactChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="email" name="email"
                            autoComplete="email"
                            value={emailValue}
                            onChange={onEmailChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input 
                            type="text" required
                            className="form-control"
                            id="address" name="address" 
                            autoComplete="address-line1"
                            value={addressValue}
                            onChange={onAddressChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="visitpurpose" className="form-label">Visit Purpose</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="visitpurpose" name="visitpurpose"
                            value={visitPurposeValue}
                            onChange={onVisitPurposeChange}
                        />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="entrytime" className="form-label">Entry Time</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="entrytime" name="entrytime"
                            value={entryTimeValue}
                            onChange={onEntryTimeChange}
                        />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="exittime" className="form-label">Exit Time</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exittime" name="exittime"
                            value={exitTimeValue}
                            onChange={onExitTimeChange}
                        />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="vulnerability" className="form-label">Vulnerability</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="vulnerability" name="vulnerability"
                            value={vulnerabilityValue}
                            onChange={onVulnerabilityChange}
                        />
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">Add New Client</button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}

export default ClientForm;
