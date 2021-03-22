import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { useState } from 'react';


function App() {
	let details = [
		{
			subscriptionType: "Free",
			costPerMonth: '$0/month',
			listItems: [
				{
					itemName: "Single User",
					isDisabled: false
				},
				{
					itemName: "5GB Storage",
					isDisabled: false
				},
				{
					itemName: "Unlimited Public Projects",
					isDisabled: false
				},
				{
					itemName: "Community Access",
					isDisabled: false
				},
				{
					itemName: "Unlimited Private Projects",
					isDisabled: true
				},
				{
					itemName: "Dedicated Phone Support",
					isDisabled: true
				},
				{
					itemName: "Free Subdomain",
					isDisabled: true
				},
				{
					itemName: "Monthly Status Reports",
					isDisabled: true
				}
			]
		},
		{
			subscriptionType: "Plus",
			costPerMonth: '$9/month',
			listItems: [
				{
					itemName: "5 Users",
					isDisabled: false
				},
				{
					itemName: "50GB Storage",
					isDisabled: false
				},
				{
					itemName: "Unlimited Public Projects",
					isDisabled: false
				},
				{
					itemName: "Community Access",
					isDisabled: false
				},
				{
					itemName: "Unlimited Private Projects",
					isDisabled: false
				},
				{
					itemName: "Dedicated Phone Support",
					isDisabled: false
				},
				{
					itemName: "Free Subdomain",
					isDisabled: false
				},
				{
					itemName: "Monthly Status Reports",
					isDisabled: true
				}
			]
		},

		{
			subscriptionType: "Pro",
			costPerMonth: '$49/month',
			listItems: [
				{
					itemName: "Unlimited Users",
					isDisabled: false
				},
				{
					itemName: "150GB Storage",
					isDisabled: false
				},
				{
					itemName: "Unlimited Public Projects",
					isDisabled: false
				},
				{
					itemName: "Community Access",
					isDisabled: false
				},
				{
					itemName: "Unlimited Private Projects",
					isDisabled: false
				},
				{
					itemName: "Dedicated Phone Support",
					isDisabled: false
				},
				{
					itemName: "Unlimited Free Subdomain",
					isDisabled: false
				},
				{
					itemName: "Monthly Status Reports",
					isDisabled: false
				}
			]
		}
	]

	const [currentPlan, setCurrentPlan] = useState('No Plan Selected');
	let handleSelectedPlan = (plan) => {
		setCurrentPlan(plan);
	}

	return (
		<section className="pricing py-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						Selected Plan : {currentPlan}
					</div>
				</div>
				<div className="row">
					{
						details.map((detail, index) =>
							<Card
								key={index}
								data={detail}
								handleBtnClick={handleSelectedPlan}>
							</Card>
						)
					}
				</div>
			</div>
		</section>
	);
}

export default App;
