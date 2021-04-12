  
import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { setAlert } from "../../actions/alert";
import { searcher } from "../../actions/profile";
import { connect } from "react-redux";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import './search.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
cardSearch:{
	backgroundColor: "white",
	margin:"50px",
	marginBottom:0
},

}));


const SearchBar = ({ setAlert, searcher }) => {
	const [text, setText] = useState("");
	const classes = useStyles();

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
		<Card className={classes.cardSearch}>
				<TextField
				 style = {{width:" 20vw"}}
					className="searchInput"
					onChange={(e) => OnChange(e)}
					name="text"
					value={text}
					type="text"
				/>
				<Button variant="contained" color="black" 
				style={{backgroundColor:"#58A8CE"}}
				onClick={e => OnClick(e)}
                                type="submit">
					Search
				</Button>
				</Card>
		</Fragment>


	
	);
};
SearchBar.propTypes = {
	searcher: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, searcher })(SearchBar);