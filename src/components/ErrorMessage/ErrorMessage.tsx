
type ErrorMessageProps = {
    message: string;
}

const ErrorMessage = ({message}: ErrorMessageProps) => { 
    return (
        <div className="alert alert-danger mt-2" role="alert">
          {message}
        </div>
      );
}

export default ErrorMessage;