import MyDocument from "../../NativeComponents/MyDocumet/MyDocument";
import classes from './header-footer-template.module.scss'
import HeaderFixed from "../../Components/HeaderFixed/HeaderFixed";
import {FC} from "react";
import Footer from "../../Components/Footer/Footer";

const HeaderFooterTemplate: FC = ({children}) => {
    return (
        <MyDocument>
            <HeaderFixed/>

            <main className={classes.main}>
                {children}
            </main>

            <Footer/>
        </MyDocument>
    )
}


export default HeaderFooterTemplate

