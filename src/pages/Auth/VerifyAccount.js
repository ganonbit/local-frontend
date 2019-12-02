import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';

import { VERIFY_TOKEN, VERIFY_ACCOUNT } from 'graphql/user';

import { Field } from 'components/Auth';

import * as Routes from 'routes';

/**
 * Reset password page
 */
const VerifyAccount = ({ history, location, refetch }) => {
	const [error, setError] = useState('');

	const handleSubmit = (e, verifyAccount) => {
		e.preventDefault();

		if (!token) {
			setError('Enter token to verify account.');
			return;
		}

		setError('');
		verifyAccount()
			.then(async ({ data }) => {
				localStorage.setItem('token', data.verifyAccount.token);
				await refetch();
				history.push(Routes.HOME);
			})
			.catch(err => {
				setError(err);
			});
	};

	const url = new URLSearchParams(location.search);
	const email = url.get('email');
	const token = url.get('token');

	return (
		<div>
			<h1>Verify Account</h1>

			<div>
				<Query query={VERIFY_TOKEN} variables={{ email, token }}>
					{({ loading, error: apiError }) => {
						// if (loading) return <Loading top="lg" />;
						if (apiError)
							return (
								<h1>
									{error}
								</h1>
							);

						return (
							<Mutation
								mutation={VERIFY_ACCOUNT}
								variables={{ input: { email, token } }}>
								{(
									verifyAccount,
									{ loading, error: apiError }
								) => {
									if (apiError) return <h1>{apiError}</h1>;

									return (
										<>
											<div className='col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12'>
						<div className='registration-login-form'>
							<div className='tab-content'>
								<div
									className='tab-pane active'
									id='home'
									role='tabpanel'
									data-mh='log-tab'>
									<div className='title h6'>
										Verify Account
									</div>

											<form
												onSubmit={e =>
													handleSubmit(
														e,
														verifyAccount
													)
												}>
												<Field
													type='text'
													name='token'
													values={token}
													placeholder={token}
												/>

												{error && (
													<div bottom='sm' top='sm'>
														<p>{error}</p>
													</div>
												)}

												<button disabled={loading}>
													Verify Account
												</button>
											</form>
										</>
									);
								}}
							</Mutation>
						);
					}}
				</Query>
			</div>
		</div>
	);
};

export default withRouter(VerifyAccount);
