import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router'

export default function ErrorPage() {
  let error = useRouteError();
  console.log(error)
  if (isRouteErrorResponse(error)) {
    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}