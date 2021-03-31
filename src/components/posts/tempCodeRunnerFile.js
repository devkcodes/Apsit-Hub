

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ post: state.post });

export default connect(mapStateToProps, { getPosts })(Posts);
