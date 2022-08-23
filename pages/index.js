import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { useUser } from '@auth0/nextjs-auth0';
import { useEffect } from 'react';

export default function Home() {
  const { user, error, isLoading } = useUser();
  function login() {
   
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css" />
        <title>Next.js By Veer</title>
      </Head>
      <main id="app" className="d-flex flex-column h-100 " data-testid="layout">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className='container'>
            <img src='https://media.glassdoor.com/sqll/443831/kaar-technologies-squarelogo-1407823308138.png' width='50px' style={{ borderRadius: "20px" }} />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" style={{ justifyContent: "center !important", alignItems: "end", alignSelf: "end" }} id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto pl-1">
                <li class="nav-item active">
                  <a class="nav-link" href="#" ><b style={{ fontSize: "20px" }}>KAAR TECH</b> <span class="sr-only">(current)</span></a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                {
                  user ?
                    <a href="/api/auth/logout" class="btn btn-success rounded" role="button" onClick={() => login()} aria-pressed="true">Logout</a>
                    :
                    <a href="/api/auth/login" class="btn btn-success rounded" role="button" onClick={() => login()} aria-pressed="true">Login</a>
                }
              </form>
            </div>
          </div>
        </nav>
        <div className={styles.container}>
          {isLoading ?
            <p>Loading....</p>
            :
            <div>
              {
                user ? (
                  <div className='container  loginDetail' style={{ textAlign: "center" }}>
                    {console.log(user)}
                    <h4 >PROFILE DETAILS</h4>
                    <div class="text-center pt-3 pb-3">
                      <img src={user.picture} class="rounded img-thumbnail" alt="..." width="200px" />
                    </div>
                    
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <td scope="row"><b>First Name </b></td>
                          <td>{user.given_name}</td>
                        </tr>
                        <tr>
                          <td scope="row"><b>Last Name</b> </td>
                          <td>{user.family_name}</td>
                        </tr>
                        <tr>
                          <td scope="row"><b>Full Name </b> </td>
                          <td>{user.name}</td>
                        </tr>
                        <tr>
                          <td scope="row"><b>EMAIL ID </b></td>
                          <td>{user.email}</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                ) : (
                  <></>
                )
              }
            </div>
          }
        </div>

      </main>
    </>
  )
}
