import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendEmailVerification
  } from "firebase/auth";


  import { useEffect, useState } from "react";
import initial from "../Login/Firebase/firebase.init";

  

  initial()

  const useFirebase=()=>{
    const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [authError,setAuthError]=useState('')
  const [admin, setAdmin] = useState(false)
  const [buyer, setBuyer] = useState(false)
  const [buyers, setBuyers] = useState(false)

//   navbar toggle 
const [toggle,setToggle]=useState(false)
const handleClick=()=>{
    setToggle(false)
}

const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

//   register email and password 
const registerUser = (email, password, name,client,contact,profession,address,choose, location, status="pending", navigate) => {
    // sendUser(email)
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password, client,contact,profession,address,choose)
    
      .then((userCredential) => {
        verifyEmail();
        // const destination = location?.state?.from || '/'
        // navigate(destination)
        setError("");
        

        const newUser = { email, displayName: name,client,contact,profession,address,choose };
        console.log(newUser)
        // verifyEmail();
        setUser(newUser)
        // verifyEmail();
        // save use to database 
        sendUser(email, name,client,contact,profession,address,choose, status="pending", 'POST');
        // send name to firebase after creation 
        // verifyEmail();
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // verifyEmail();
         })
          .catch((error) => { })
          setAuthError('')
          const destination = location?.state?.from || '/'
          navigate(destination)
      })
      .catch((error) => {
        // setError(error.message);
        setAuthError(error.message) 
      })
      .finally(() => setIsLoading(false));

  }

  //lOGIN WITW EMAIL AND PASSWORD COUSTM 
  const loginWithOwnEmailAndPass = (email, password, location, navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/'
        navigate(destination)
        // setError('');
        setAuthError('')
      })
      .catch((error) => {
        // setError(error.message);
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false));

  }

  // GOOGLE PROVIDER LOGIN
  const loginWithGoogle = (location, navigate) => {

    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        // save to database 
        sendUser(user.email, user.displayName, 'PUT')
        // setError("")
        setAuthError('');
        const destination = location?.state?.from || '/'
        navigate(destination)
      }).catch(error =>  setAuthError(error.message))
      .finally(() => setIsLoading(false))

  };


  // verifyemail 
   const verifyEmail=()=>{
    sendEmailVerification(auth.currentUser)
  .then((result) => {
   console.log(result)
  });
   }

  //LOG OUT USER METHOD
  const userLogOut = () => {
    setIsLoading(true)
    setToggle(false)
    signOut(auth)
      .then(() => {

      }).catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false));
  }


  // save user to database 
  const sendUser = (email, displayName,client,contact,profession,address,choose, status="pending",method) => {
    const user = { email, displayName, status,client,contact,profession,address,choose };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then()
    // .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })
  }


  //OBSERVER USER STATE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // buyer CONDITIONAL DATALOAD
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setBuyer(data?.buyer)
      })
  }, [user.email])
  // buyer CONDITIONAL DATALOAD
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setBuyers(data?.buyers)
      })
  }, [user.email])

 // admin role the database 
 useEffect(()=>{
  fetch(`http://localhost:5000/userLogin/${user.email}`)
  .then(res=>res.json())
  .then(data=>setAdmin(data?.admin))
},[user.email])

  return {
    user,
    loginWithGoogle,
    userLogOut,
    registerUser,
    isLoading,
    error,
    loginWithOwnEmailAndPass,
    toggle,
    setToggle,
    handleClick,
    admin,
    buyer,
    buyers,
    authError
   
  }
  }

  export default useFirebase;
