import { UseAuth } from "../context/AuthContext"
import { useUrls } from "../context/UrlContext"

const Errors = () => {
    const {errors: errorsAuth} = UseAuth()
    const {errors: errorsUrls} = useUrls()
    return (
        <>{
            errorsAuth &&
            errorsAuth.map(((errorMessage, i)=> (
                <p className="text-red-600 font-semibold" key={i}>{errorMessage}</p>
            )))
        }
        {
            errorsUrls &&
            errorsUrls.map(((errorMessage, i)=> (
                <p className="text-red-600 font-semibold" key={i}>{errorMessage}</p>
            )))
        }</>
    )
}

export default Errors
