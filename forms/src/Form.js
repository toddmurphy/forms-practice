import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';


const FormWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    padding: 3% 0;
    margin: auto;
`

const FormContainer = styled.div`
    margin: 2% 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const TextInput = styled.input`
    margin: 0 3%;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;
`
const SelectInput = styled.select`
    margin: 0 3%;
    height: 40px;
    width: 100%;
    border: 2px solid lightgrey;
    font-size: 1rem;
    color: grey;
`
const CreateButton = styled.button`
    width: 80%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #2196f3;
    color: #FFF;
`

const Form = () => {
    //core concept --> 'register' each input ref to subscribe to changes
    // 'name' is IMPORTANT because it's a 'unique' identifier to register
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormWrapper>
                <FormContainer>
                    <TextInput
                        name='firstname'
                        type='text'
                        placeholder='First name'
                        ref={register({ required: true, minLength: 2 })}
                    />
                </FormContainer>
                {errors.firstname && errors.firstname.type === 'required' && <p>This is required</p>}
                {errors.firstname && errors.firstname.type === 'minLength' && <p>This field required min length of 2 characters</p>}
                <FormContainer>
                    <TextInput
                        name='lastname'
                        type='text'
                        placeholder='Last name'
                        ref={register({ required: true })}
                    />
                </FormContainer>
                {errors.lastname && <p>This is required</p>}
                <FormContainer>
                    <TextInput
                        name='address'
                        type='text'
                        placeholder='Address'
                        ref={register({ required: true })}
                    />
                </FormContainer>
                {errors.address && <p>This is required</p>}
                <FormContainer>
                    <SelectInput
                        name='gender'
                        placeholder='Gender'>
                        ref={register({ required: true })}
                        <option value=''>Select...</option>
                        <option value='male'>Male</option>
                        <option value='male'>Female</option>
                    </SelectInput>
                </FormContainer>
                {errors.gender && <p>This is required</p>}
                <FormContainer>
                    <TextInput
                        name='email'
                        type='text'
                        placeholder='Email'
                        ref={register({ required: true })}
                    />
                </FormContainer>
                {errors.email && <p>This is required</p>}
                <FormContainer>
                    <TextInput
                        name="age"
                        type='number'
                        placeholder='Age'
                        ref={register({ required: true })}
                    />
                </FormContainer>
                {errors.age && <p>This is required</p>}
                <FormContainer>
                    <CreateButton type='submit'>Submit form</CreateButton>
                </FormContainer>
            </FormWrapper>
        </form>
    )
}

export default Form;