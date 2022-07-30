import Head from "next/head";
import A from "./A";

const MainContainer = ({children, keywords, title}) => {
  return (
    <>
      <Head>
        <meta keywords={"genazoz, next.js" + keywords}/>
        <title>{title}</title>
      </Head>
      <div className={'navbar'}>
        <A href={'/'} text={'Главная'}></A>
        <A href={'/users'} text={'Пользователи'}></A>
      </div>
      <style jsx>
        {`
            .navbar {
              padding: 15px;
  
              background-color: orange;
            }
          `}
      </style>
      <div>
        {children}
      </div>
    </>
  )
}

export default MainContainer;