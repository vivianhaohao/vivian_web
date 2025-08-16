import Head from '../layoutComponents/head'
import Intro from '../layoutComponents/intro'
import Guide from '../layoutComponents/guide'
import { Outlet } from 'react-router-dom'
import Tail from '../layoutComponents/tail'

export default function Layout() {
  return (
    <>
      <Head />
      <Intro />
      <Guide />
      <Outlet />
        <Tail/>
    </>
  )
}
