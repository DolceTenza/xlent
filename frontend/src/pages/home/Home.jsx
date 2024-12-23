import React from 'react'
import { Left } from '../../components/left/Left'
import { Center } from '../../components/center/center'
import { Right } from '../../components/right/Right'
import {BiEnvelope} from 'react-icons/bi'

export const Home = () => {
  return (
    <>
      <div className="home-contenaire">
        <div className="left">
          <Left />
          <BiEnvelope />
        </div>
        <div className="center">
          <Center />
        </div>
        <div className="right">
          <Right />
        </div>
      </div>



    </>
  )
}
