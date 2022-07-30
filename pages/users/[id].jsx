import MainContainer from "../../components/MainContainer";

export default function User ({user}) {
  return  (
    <MainContainer title={'Пользователь'}>
      <h1>Пользователь с id {user.id}</h1>
      <div>Имя пользователя - {user.name}</div>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json()

  return {
    props: {user},
  }
}