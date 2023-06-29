import Global from "@/styles/Global.scss"

function MyApp ({ Component, pageProps }) {
    return (
        <Component { ...pageProps }/>
    )
}

export default MyApp;