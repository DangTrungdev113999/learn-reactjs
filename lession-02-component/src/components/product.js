import React, { Component } from 'react';

class product extends Component {
	render() {
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div className="thumbnail">
					<img src="https://cdn1.vienthonga.vn/image/2018/11/1/100000_iphone-xs-max-1020x550-1.jpg" 
					alt="iphone" className='img-reponsive img-thumbnail'/>
					<div className="caption">
						<h3>Iphone 6s plus</h3>
						<p>
							15.000.000 vnđ
						</p>
						<p>
							<a href="#" className="btn btn-primary">Action</a>
							<a href="#" className="btn btn-default">Action</a>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default product;
