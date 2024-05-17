const ErrorMessage = ({error, message, className}) => {
  return (
        <div className="h-6 w-full">
         {error &&
         <p className={`w-full text-red-600 ${className}`}>{message}</p>
         }
        </div>
  )
}

export default ErrorMessage
