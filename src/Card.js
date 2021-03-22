import React from 'react';

function Card(props) {
	return (
		<div className="col-lg-4 col-sm-12">
			<div className="card mt-2">
				<div className="card-body">
					<h5 className="card-title text-muted text-uppercase text-center">{props.data.subscriptionType}</h5>
					<h6 className="card-price text-center">{props.data.costPerMonth}</h6>
					<hr></hr>
					<ul className="fa-ul">
						{
							props.data.listItems.map((item, index) => {
								return item.isDisabled ?
								<li key={index} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{item.itemName}</li>:
								<li key={index}><span className="fa-li"><i className="fas fa-check"></i></span>{item.itemName}</li>
									
							})
						}
					</ul>
					<a href="#" className="btn btn-block btn-primary text-uppercase" onClick={() => props.handleBtnClick(props.data.subscriptionType)}>Button</a>
				</div>
			</div>
		</div>
	)
}

export default Card;