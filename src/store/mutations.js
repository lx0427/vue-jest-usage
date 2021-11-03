export default {
    SET_POST(state, { post }) {
        let { id } = post;
        state.postIds.push(id);
        state.posts = { ...state.posts, [id]: post };
    },
};
