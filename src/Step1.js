import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useData } from './DataContext';
import MainContainer from './Components/MainContainer';
import Form from './Components/Form';
import { Input } from './Components/Input';
import { PrimaryButton } from './Components/PrimaryButton';
import { Typography } from '@material-ui/core';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'First name should not contain numbers')
		.required('First name is a required field'),
	lastName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
		.required('Last name is a required field'),
});

const Step1 = () => {
	const { setValues, data } = useData();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { firstName: data.firstName, lastName: data.lastName },
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});
	const history = useHistory();

	const onSubmit = (data) => {
		history.push('/step2');
		setValues(data);
	};
	return (
		<MainContainer>
			<Typography component='h2' variant='h5'>
				Step 1
			</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register('firstName')}
					name='firstName'
					type='text'
					label='First Name'
					error={!!errors.firstName}
					helpertext={errors?.firstName?.message}
				/>
				<Input
					{...register('lastName')}
					name='lastName'
					type='text'
					label='Last Name'
					error={!!errors.lastName}
					helpertext={errors?.lastName?.message}
				/>
				<PrimaryButton type='submit'>Next</PrimaryButton>
			</Form>
		</MainContainer>
	);
};

export default Step1;
