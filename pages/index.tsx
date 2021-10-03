import type { NextPage } from 'next'
import HeaderFooterTemplate from "../src/Elements/templates/HeaderFooter/HeaderFooterTemplate";
import Home from "../src/Elements/Pages/Home/Home";

const Index: NextPage = () => {
  return (
      <HeaderFooterTemplate>
        <Home/>
      </HeaderFooterTemplate>
  )
}

export default Index
