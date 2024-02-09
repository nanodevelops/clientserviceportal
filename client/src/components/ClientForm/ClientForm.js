import React from "react";
import PageTitle from "../PageTitle/PageTitle";

const ClientForm = ({ onFormSubmit, onFirstNameChange, firstNameValue, onLastNameChange, lastNameValue, onGenderChange, genderValue, onContactChange, contactValue, onEmailChange, emailValue, onAddressChange, addressValue, onVisitPurposeChange, visitPurposeValue, onEntryTimeChange, entryTimeValue, onExitTimeChange, exitTimeValue, onVulnerabilityChange, vulnerabilityValue }) => {

    return (
        <div className="container">
            <div>
                <PageTitle title="Add new client" />
                <form onSubmit={onFormSubmit}>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input 
                            type="text" required 
                            className="form-control" 
                            id="firstName" name="firstName"
                            autoComplete="given-name"
                            placeholder="First Name"
                            value={firstNameValue} 
                            onChange={onFirstNameChange}
                            /> 
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input 
                            type="text" required 
                            className="form-control" 
                            id="lastName" name="lastName"
                            autoComplete="family-name"
                            placeholder="Surname"
                            value={lastNameValue} 
                            onChange={onLastNameChange} 
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                    type="text" 
                                    className="form-control" 
                                    id="email" name="email"
                                    autoComplete="email"
                                    placeholder="Email"
                                    value={emailValue}
                                    onChange={onEmailChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="address" className="form-label">Address</label>
                            <select 
                            className="form-select"
                            id="address" name="address"
                            value={addressValue}
                            onChange={onAddressChange}
                            >
                                        
                                <option value="Abotanso">Abotanso</option>
                                <option value="Ada">Ada</option>
                                <option value="Adweso">Adweso</option>
                                <option value="Agavenya">Agavenya</option>
                                <option value="Anlo-town">Anlo-town</option>
                                <option value="Apenkwa">Apenkwa</option>
                                <option value="Atekyem">Atekyem</option>
                                <option value="Densuano">Densuano</option>
                                <option value="Galloway">Galloway</option>
                                <option value="Klu-town">Klu-town</option>
                                <option value="Koforidua-newtown">Koforidua-newtown</option>
                                <option value="Korle-agavenya">Korle-agavenya</option>
                                <option value="Market-area">Market-area</option>
                                <option value="Mile-50">Mile-50</option>
                                <option value="Monrovia">Monrovia</option>
                                <option value="Nsukwao">Nsukwao</option>
                                <option value="Oguaa-main">Oguaa-main</option>
                                <option value="Okpe">Okpe</option>\                                        <option value="Monrovia">Koforidua-newtown</option>
                                <option value="Old-estate">Old-estate</option>
                                <option value="Poly">Poly</option>
                                <option value="Srodae">Srodae</option>
                                <option value="Trom">Trom</option>
                                <option value="Two-streams">Two-streams</option>
                                <option value="Other">Other</option>
                            </select>
                            
                        </div>
                    </div>
                    <br />
                    <div className="row mb-3">
                        <div className="col-md-6">
                        <label htmlFor="contact" className="form-label">Contact</label>
                        <input 
                                    type="text" required
                                    className="form-control"
                                    id="contact" name="contact" 
                                    autoComplete="tel-national"
                                    placeholder="Contact"
                                    value={contactValue}
                                    onChange={onContactChange}
                                    />

                        </div>
                        <div className="col-md-6">
                        <label htmlFor="vulnerability" className="form-label">Vulnerability</label>
                        <select 
                                    className="form-select"
                                    id="vulnerability" name="vulnerability"
                                    value={vulnerabilityValue}
                                    onChange={onVulnerabilityChange}
                                    >
                                        <option value="None">None</option>
                                        <option value="Minor">Minor</option>
                                        <option value="Disabled">Disabled</option>
                                        <option value="Veteran">Veteran</option>
                                    </select>

                        </div>
                    </div>
                    <br />
                    <div className="row mb-3">
                        <div className="col-md-3">
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
                            <label htmlFor="visitpurpose" className="form-label">Visit Purpose</label>
                            <select
                            className="form-select" 
                            name="visitpurpose" id="visitpurpose"
                            value={visitPurposeValue}
                            onChange={onVisitPurposeChange}
                            >
                                <option value="Walk-in Service">Walk-in Service</option>
                                <option value="Complaint">Complaint</option>
                                <option value="Enquiry">Enquiry</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                        <label htmlFor="entrytime" className="form-label">Entry Time</label>
                        <input 
                                    type="text" 
                                    className="form-control" 
                                    id="entrytime" name="entrytime"
                                    value={entryTimeValue}
                                    onChange={onEntryTimeChange}
                                    />
                        </div>
                        <div className="col-md-3">
                        <label htmlFor="exittime" className="form-label">Exit Time</label>
                        <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exittime" name="exittime"
                                    value={exitTimeValue}
                                    onChange={onExitTimeChange}
                                    />
                        </div>
                    </div>
                    <br />
                    <div className="row mb-3">
                        <div className="col">
                            <button type="submit" className="btn btn-primary">Add New Client</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
    
}

export default ClientForm;
