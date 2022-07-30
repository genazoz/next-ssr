import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
  return (
    <MainContainer title={'Пользователи'}>
      <h1>Users</h1>
      {users.map(user =>
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </li>
      )}
    </MainContainer>
  )
}

export default Users;

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json()

  return {
    props: {users},
  }
}