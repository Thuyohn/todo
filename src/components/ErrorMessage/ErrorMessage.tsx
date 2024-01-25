type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="toast toast-center">
      <div className="alert alert-error">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ErrorMessage;
