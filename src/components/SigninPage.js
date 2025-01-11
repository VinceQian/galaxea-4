import React from 'react';
import {getAuth, EmailAuthProvider, GoogleAuthProvider} from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';

export default function SignInPage(props) {
  const auth = getAuth();
  const uiConfigObj = {
    signInOptions: [
        // { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName:true},
        { provider: GoogleAuthProvider.PROVIDER_ID}
    ],
    signInFlow:'popup',
    callbacks: {
        signInSuccessWithAuthResult: () => false
    },
    credentialHelper: 'none'
  };

  return (
    <div className="react-body">
        <h2 className="text-center navtext mt-5 mb-1">这是我更新内容的地方，只有我可以登录，点击河狸返回主页。</h2>
        <h2 className="text-center navtext mt-1 mb-1">There is where I upload content. Registration is suspended.</h2>
        <h2 className="text-center navtext mt-1 mb-4">Click the Beaver to go back to homepage.</h2>
        <div className="container">
            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfigObj} />
        </div>
    </div>
  )
}