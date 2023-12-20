'use client'

import styled from "styled-components";
import { Card } from "@/components/Card/Card";
import { Form } from "@/components/Form/Form";


export default function Home() {
  return (
    <Main>
      <Card/>
      <Form/>
    </Main>
  )
}


const Main = styled.main`
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;


    display: flex;
    align-items: center;
    justify-content: center;
    gap: 130px;


    background: url('/images/bg-main-desktop.png') no-repeat;
    background-size: 35% 100%;
`
