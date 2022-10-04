import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { wrapper } from '../../store';
import { fetchUsersStart } from '../../actions';

const AllUsersPage = () => {
  const userList = useSelector(store => store.userList);
  console.log(userList);
  const { users, error } = userList;

  return (
    <div>
      { users && users.map(user => (
        <h2 key={user.id}>
          <Link href={`/users/${user.id}/`}>
            { user.name }
          </Link>  
        </h2>
      )) }
    </div>
  )
}

export default AllUsersPage;

export const getStaticProps = wrapper.getStaticProps((store) => async ({ req, res }) => {
  await store.dispatch(fetchUsersStart());
  await store.dispatch(END);
  await store.sagaTask.toPromise();
});