import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { newClient } from '../actions/formActions'
import { useDispatch } from 'react-redux'
import clients from '../data/clients'

const Intro = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [language, setLanguage] = useState('')
    const [pronouns, setPronouns] = useState('')
    const dispatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState('Myself')

    const handleSubmitNewClient = (e) => {
        e.preventDefault()
        dispatch(newClient(uuidv4(), firstName, lastName, email, phone, language, pronouns))
    }

    console.log(clients)

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <form onSubmit={handleSubmitNewClient} className='new-client-form'>
                            <label>For whom are you filling out this form?</label>
                            <select value={selectedOption} onChange={handleOptionChange}>
                                <option value='Myself'>Myself</option>
                                <option value='Someone else'>Someone else</option>
                            </select>
                            {selectedOption === 'Someone else' && (
                                <>
                                    <h2>Fill out the fields below with YOUR information, NOT that of the affected person.</h2>
                                    <label>Name (not the name of the affected person)</label>
                                    <input type='text' placeholder='Your name' />
                                    <label>Phone number of referrer:</label>
                                    <input type='text' placeholder='Your phone number' />
                                    <label>Email address of referrer:</label>
                                    <input type='text' placeholder='Your email address' />
                                    <label>Have you informed this person that you are referring them to Giving Kitchen?</label>
                                    <select>
                                        <option>Yes</option>
                                        <option>Not yet</option>
                                    </select>
                                </>
                            )

                            }
                            <h2>Fill out the information below for the AFFECTED person:</h2>
                            <label htmlFor="firstName">First name:</label>
                            <input type='text' placeholder='First name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                            <label htmlFor="lastName">Last name:</label>
                            <input type='text' placeholder='Last name' value={lastName} onChange={e => setLastName(e.target.value)} />
                            <label htmlFor='email'>Email address:</label>
                            <input type='text' placeholder='Email address' value={email} onChange={e => setEmail(e.target.value)} />
                            <label htmlFor='phone'>Phone number:</label>
                            <input type='text' placeholder='Phone number' value={phone} onChange={e => setPhone(e.target.value)} />
                            <label htmlFor='language'>Preferred language:</label>
                            <select value={language} onChange={e => setLanguage(e.target.value)}>
                                <option>English</option>
                                <option>Spanish</option>
                                <option>Cantonese</option>
                                <option>Korean</option>
                                <option>Mandarin</option>
                                <option>Portuguese</option>
                                <option>Vietnamese</option>
                                <option>Other</option>
                            </select>
                            <label htmlFor='pronouns'>Preferred pronouns:</label>
                            <select value={pronouns} onChange={e => setPronouns(e.target.value)}>Preferred pronouns:
                                <option>She/her/hers</option>
                                <option>He/Him/his</option>
                                <option>They/them/theirs</option>
                                <option>Other</option>
                            </select>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro
