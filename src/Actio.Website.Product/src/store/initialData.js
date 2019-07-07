import { PRODUCTS, SUPPLIERS } from "../constants/dataTypes";

export const initialData = {
    modelData: {
        [PRODUCTS]: [],
        [SUPPLIERS]: []
    },
    stateData: {
        editing: false,
        selectedId: -1,
        selectedType: PRODUCTS
    }
}
