import React, { useContext, useEffect, useState } from 'react'
import Loading from './Loading';
import Section from './Section';
import { Firebase } from "../Firebase/FirebaseConfig";
import "firebase/compat/database";
import {AppContext} from '../Firebase/FirebaseContext'

function Body() {
    // eslint-disable-next-line no-unused-vars
    const { value, setValue, checkboxes, setCheckboxes } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
      
        const fetchData = async () => {
          try {
            const paths = ["/switch-1", "/switch-2", "/switch-3", "/switch-4"];
      
            await Promise.all(
              paths.map((path) => {
                const switchRef = Firebase.database().ref(path);
      
                return new Promise((resolve) => {
                  switchRef.on("value", (snapshot) => {
                    const data = snapshot.val();
                    const switchName = path.replace(/\/|-/g, "");
                    setCheckboxes((prevState) => ({
                      ...prevState,
                      [switchName]: data ? 1 : 0,
                    }));
                    resolve(); // Resolve the promise after setting the checkbox value
                  });
                });
              })
            );
      
            setIsLoading(false);
          } catch (error) {
            console.log("Error fetching data from Firebase:", error);
          }
        };
      
        const fetchInitialValue = async () => {
          try {
            const fanValue = Firebase.database().ref("/value");
      
            fanValue.on("value", (snapshot) => {
              const fan = snapshot.val();
              setValue(fan || 0);
            });
          } catch (error) {
            console.log("Error fetching initial value from Firebase:", error);
          }
        };
          fetchInitialValue();
          fetchData();
      
          return () => {
            // Cleanup the listeners when the component is unmounted
            Firebase.database().ref("/value").off("value");
            Firebase.database().ref("/switch-1").off("value");
            Firebase.database().ref("/switch-2").off("value");
            Firebase.database().ref("/switch-3").off("value");
            Firebase.database().ref("/switch-4").off("value");
          };
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      
  return (
    <div>
      {isLoading ? (<Loading />) : (<Section/>)}
    </div>
  )
}

export default Body
