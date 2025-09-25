import { createContext, useState, ReactNode, useContext } from "react";

type UserOnboarding = {
  firstName: string;
  lastName?: string;
  image: string;
  sports: string[];
  sessionId: string;
  setSessionId: (name: string) => void;
  setFirstName: (name: string) => void;
  setLastName: (name: string) => void;
  setImage: (uri: string) => void;
  setSports: (sports: string[]) => void;
};

const UserOnboardingContext = createContext<UserOnboarding | null>(null);

export const UserOnboardingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [sports, setSports] = useState<string[]>([]);
  const [sessionId, setSessionId] = useState("");
  return (
    <UserOnboardingContext.Provider
      value={{
        firstName,
        lastName,
        image,
        sports,
        sessionId,
        setFirstName,
        setLastName,
        setImage,
        setSports,
        setSessionId,
      }}
    >
      {children}
    </UserOnboardingContext.Provider>
  );
};

export const useUserOnboarding = () => {
  const ctx = useContext(UserOnboardingContext);
  if (!ctx) {
    throw new Error(
      "useUserOnboarding must be used within a UserOnboardingProvider"
    );

    return ctx;
  }
};
