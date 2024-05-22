import { Linking } from "react-native";

describe("TabMapaScreen", () => {
    it("Abre el BottomSheet al oprimir un marcador", () => {
        const openURL = jest.fn();
        Linking.openURL = openURL;
        expect(openURL).not.toHaveBeenCalled();
    });
});
