import React from "react";

interface AlertProps {
    message: string;
    isSuccess: boolean;
}

export const Alert = ({ message, isSuccess }: AlertProps) => {
    return (
        <div
            className={`alert alert__success d-flex justify-content-center flex-column align-items-center p-3 ${
                isSuccess ? "alert__success" : "alert__error"
                }`}
        >
            <h5 className="text-white">
                {isSuccess ? "Success!" : "Error!"}
            </h5>
            <div className="text-white text-center">{message}</div>
        </div>
    );
};

Alert.defaultProps = {
    isSuccess: false
}