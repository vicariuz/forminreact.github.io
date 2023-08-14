const Alert = ({msg, color}) => {
    return (
    <>
        <div className={`alert alert-${color} mt-2`}>
            <p id="msg">{msg}</p>
        </div>
    </>
 );
};

export default Alert;