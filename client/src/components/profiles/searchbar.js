  
import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { setAlert } from "../../actions/alert";
import { searcher } from "../../actions/profile";
import { connect } from "react-redux";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const SearchBar = ({ setAlert, searcher }) => {
	const [text, setText] = useState("");

	const OnChange = (e) => setText(e.target.value);

	const OnClick = async (e) => {
		console.log("im here");
		e.preventDefault();
		if (text == "") {
			setAlert("Please Enter Something", "danger");
		} else {
			searcher(text);
			console.log(text);
		}
	};

	return (
		<Fragment>
			<FormControl className="searchBox" >
				<TextField
					className="searchInput"
					onChange={(e) => OnChange(e)}
					name="text"
					value={text}
					type="text"
				/>
				<Button onClick={e => OnClick(e)}
                                type="submit">
					<i className="fa fa-search" />
				</Button>
			</FormControl>
		</Fragment>
	);
};
SearchBar.propTypes = {
	searcher: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, searcher })(SearchBar);