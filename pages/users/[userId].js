// import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';

import { wrapper } from '../../store';
import { fetchSingleUserStart, fetchUsersStart } from '../../actions';
import store from '../../store';

const UserPage = () => {
    const userDetails = useSelector(store => store.userDetails);
    const { user, error } = userDetails;

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <h1>{ user.id } - { user.name }</h1>
    );
}

export const getStaticProps = wrapper.getStaticProps(store => async ({ params }) => {
    const { userId } = params;  

    if (userId && userId !== null) {
        await store.dispatch(fetchSingleUserStart(userId));
        await store.dispatch(END);
        await store.sagaTask.toPromise();
    } else {
        return { notFound: true };
    }
});

export async function getStaticPaths() {
    let paths;
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const users = await response.json();
        paths = users ? 
            users.map(user => ({ params: { userId: user.id.toString() } })) 
            : [{ params: { userId: '1' } }];
    } catch(error) {
        paths = [{ params: { userId: '1' } }];
    }

    return {
        paths,
        fallback: true
    }
}

export default UserPage;