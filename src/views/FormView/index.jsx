import React, { useState, useEffect } from 'react';
import Page from '../../components/Shared/Page';
import Form from '../../components/Form'
import TextInput from '../../components/Input/TextInput'
import Select from '../../components/Select'
import RadioGroup from '../../components/Radio'
import Checkbox from '../../components/Checkbox'
import { FORM_DATA } from '../../constants'
import { SELECT_DATA } from '../../constants'
import { RADIO_OPTIONS } from '../../constants'
import { isPhoneNumberValid } from '../../helpers/phoneValidator'

function FormView() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
        phone: '',
        experience: null,
        framework: null,
        newsletter: false,
    });
    const { name, bio, email, experience, phone } = formData;


    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
    };

    const handleSelect = (option) => {
        setFormData((prevData) => ({ ...prevData, experience: option.label }));
    }

    const handleCheckbox = (e) => {
        setFormData((prevData) => ({ ...prevData, newsletter: e.target.checked }));
    };

    const handleRadio = (option) => {
        setFormData((prevData) => ({...prevData, framework: option }))
    }

    useEffect(() => {
        const errors = {}

        if (name.length === 0) {
            errors.name = "Please enter a name."
        }

        if (!email.includes('@') || !email.includes('.')) {
            errors.email = "Please enter a valid email."
        }

        if (!experience) {
            errors.experience = "Please select your experience level."
        }

        if (!isPhoneNumberValid(phone)) {
            errors.phone = "Please enter a valid phone number."
        }

        if (bio.length > 150) {
            errors.bio = "Bio must be less than 150 characters."
        }

        setErrors(errors)
    }, [ name, bio, email, experience, phone ])

    return (
        <Page>
            <section className='wrapper main--display'>
                <article className="wrapper article--wrapper">
                    <h5 className='article--title'>Forms</h5>
                    <Form sections={2} onSubmit={handleSubmit} formProps={FORM_DATA}>
                        <TextInput
                            name="name"
                            value={formData.name}
                            setValue={handleChange}
                            type="text"
                            label="Name"
                            error={errors.name}
                            placeholder="John Smith"
                        />
                        <Select
                            label='Years of experience'
                            name='experience'
                            options={SELECT_DATA.EXPERIENCE}
                            setValue={handleSelect}
                            selectedOption={formData.experience}
                            error={errors.experience}
                        />
                        <TextInput
                            name="email"
                            value={formData.email}
                            setValue={handleChange}
                            type="text"
                            label="Email"
                            error={errors.email}
                            placeholder="jsmith@email.com"
                        />
                        <TextInput
                            name="phone"
                            value={formData.phone}
                            setValue={handleChange}
                            type="tel"
                            label="Phone"
                            error={errors.phone}
                            placeholder="123-456-7890"
                        />
                        <TextInput
                            name="bio"
                            value={formData.bio}
                            setValue={handleChange}
                            type="textarea"
                            label="Short Introduction"
                            error={errors.bio}
                            placeholder="Tell us about yourself..."
                        />
                        <RadioGroup
                            name="framework"
                            label="Choose your framework"
                            value={formData.framework}
                            error={errors.framework}
                            setValue={handleRadio}
                            radios={RADIO_OPTIONS.FRAMEWORKS}
                        />
                        <Checkbox
                            id="newsletter"
                            name="newsletter"
                            label="Do you want to sign up for the newsletter"
                            checked={formData.newsletter}
                            onChange={handleCheckbox}
                        />
                    </Form>
                </article>
            </section>
        </Page>
    )
}

export default FormView
