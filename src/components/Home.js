/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommends from './Recommends'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../firebase'
import { setMovies } from "../features/user/Movies/movieSlice";
import { selectUserName } from '../features/user/userSlice'
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'


const Home = (props) => {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  let recommends = []
  let newDisneys = []
  let originals = []
  let trending = []

  useEffect(() =>{ 
    
    const q = query(
      collection(db, "movies"),
      orderBy("type", "desc"),
      )
  
   /* A hook that is used to fetch the messages from the database. */
    const unsub = onSnapshot(q, snapshot => {
      snapshot.forEach(doc => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }
            })
            dispatch(setMovies(
              {
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending
              }
            ))

          })
    
     /* Setting the messages to the tempMessages. */
   /* A cleanup function that is used to unsubscribe from the database. */
        
    return () => {
      unsub()
    }
    
  }, [userName]) 

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

export default Home

const Container = styled.main`
  position : relative;
  min-height: calc(100vh - 250px);
  display: block;
  overflow-x: hidden;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);


  &:after {
    background: url("/images/home-background.png") center center / cover 
    no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`