  
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
import { Search } from '@geist-ui/react-icons'


const useStyles = makeStyles((theme) => ({
cardSearch:{
	margin:"50px",
	width:'320px',
	marginBottom:0,

},
searchInput:{
	border:'none',
	width:'73.75%',
	padding:'10px'
},
searchbtn:{

	backgroundColor:'#2B7A78'
}

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
				<input
					className={classes.searchInput}
					onChange={(e) => OnChange(e)}
					name="text"
					value={text}
					type="text"
					placeholder="search users..."
				/>
				<Button variant="contained" color="black"  className={classes.searchbtn}
				onClick={e => OnClick(e)}
                                type="submit">
					<Search/>
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