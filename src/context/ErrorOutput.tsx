// React
import { createContext, useContext, useState } from "react";
// Components
import ErrorMessage from "../components/outputs/ErrorMessage/ErrorMessage";

// Interfaces
interface ErrorProps {
  handleError: (data: any) => void;
}

const ErrorContext = createContext<ErrorProps>({} as ErrorProps);

export const useErrorOutput = () => {
  return useContext(ErrorContext);
};

export const ErrorProvider = ({ children }: any) => {
  const transparent = true;
  const [visible, setVisible] = useState<boolean>(false);
  const [content, setContent] = useState<any>({
    message: "no hay info",
  });

  const handleError = (data: any) => {
    setContent(data), setVisible(!visible);
  };

  const value = {
    handleError,
  };

  return (
    <ErrorContext.Provider value={value as ErrorProps}>
      {children}
      <ErrorMessage
        visible={visible}
        content={content}
        transparent={transparent}
        onClose={() => setVisible(!visible)} 
      />
    </ErrorContext.Provider>
  );
};