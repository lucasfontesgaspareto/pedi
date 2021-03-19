import React, { createContext, useState } from "react";

export interface IPedimusica {
  id?: number;
  name?: string;
  latitude?: number;
  longitude?: number;
  about?: string;
  celPhone?: string;
  instructions?: string;
  opening_hours?: string;
  open_on_weekends?: boolean;
  images?: [
    {
      id: number;
      url: string;
    }
  ];
}
export interface PedimusicaContextData {
  pedimusica?: IPedimusica;
  setPedimusicaData(data: IPedimusica): void;
  setLatLon(latitude: number, longitude: number): void;
  setName(name: string): void;
  setCelPhone(celPhone: string): void;
  setAbout(about: string): void;
  setInstructions(instructions: string): void;
  setOpeningHours(opening_hours: string): void;
  setOpenOnWeekends(open_on_weekends: boolean): void;
}

const PedimusicaContext = createContext<PedimusicaContextData>(
  {} as PedimusicaContextData
);

export const PedimusicaProvider: React.FC = ({ children }) => {
  const [pedimusica, setPedimusica] = useState<IPedimusica>({} as IPedimusica);

  function setPedimusicaData(data: IPedimusica) {
    setPedimusica(data);
  }

  function setLatLon(latitude: number, longitude: number) {
    setPedimusica({ ...pedimusica, latitude, longitude });
  }

  function setName(name: string) {
    setPedimusica({ ...pedimusica, name });
  }

  function setAbout(about: string) {
    setPedimusica({ ...pedimusica, about });
  }

  function setCelPhone(celPhone: string) {
    setPedimusica({ ...pedimusica, celPhone });
  }

  function setInstructions(instructions: string) {
    setPedimusica({ ...pedimusica, instructions });
  }

  function setOpeningHours(opening_hours: string) {
    setPedimusica({ ...pedimusica, opening_hours });
  }

  function setOpenOnWeekends(open_on_weekends: boolean) {
    setPedimusica({ ...pedimusica, open_on_weekends });
  }

  return (
    <PedimusicaContext.Provider
      value={{
        pedimusica,
        setPedimusicaData,
        setLatLon,
        setName,
        setAbout,
        setInstructions,
        setCelPhone,
        setOpeningHours,
        setOpenOnWeekends,
      }}
    >
      {children}
    </PedimusicaContext.Provider>
  );
};

export default PedimusicaContext;
