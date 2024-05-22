import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Linking } from "react-native";

import TabIndexScreen from "../(tabs)";

describe("TabIndexScreen", () => {
  it("Muestra el mensaje del botón", () => {
    const { getByText } = render(<TabIndexScreen />);
    expect(getByText("Oprime el botón y reporta")).toBeTruthy();
  });

  it("Oprime el botón y abre WhatsApp ennviando un mensaje", () => {
    const openURL = jest.fn();
    Linking.openURL = openURL;

    const { getByText } = render(<TabIndexScreen />);
    fireEvent.press(getByText("REPORTAR INCIDENTE"));

    expect(openURL).toHaveBeenCalledWith(
      "https://wa.me/573187133129?text=Hola%20CAI%20de%20la%20policia%20necesito%20ayuda%20en%20la%20siguiente%20ubicacion%20https://maps.app.goo.gl/SR9iGHhnYR6DAvKU6"
    );
  });
});
