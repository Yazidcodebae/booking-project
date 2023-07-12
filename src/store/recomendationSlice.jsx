import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

const initialValue = [
    {
        id: 1,
        title: "Judul 1",
        foto: [
            { foto1: "foto1.jpg" },
            { foto2: "foto2.jpg" },
            { foto3: "foto3.jpg" },
        ],
        price: 120000,
    },
    {
        id: 2,
        title: "Judul 2",
        foto: [
            { foto1: "foto1.jpg" },
            { foto2: "foto2.jpg" },
            { foto3: "foto3.jpg" },
        ],
        price: 120000,
    },
    {
        id: 3,
        title: "Judul 3",
        foto: [
            { foto1: "foto1.jpg" },
            { foto2: "foto2.jpg" },
            { foto3: "foto3.jpg" },
        ],
        price: 120000,
    },
];

export const recomendationSlice = createSlice({
    name: "recomendation",
    initialState: {
        recomendations: initialValue,
    },
    reducers: {},
});

export const {} = recomendationSlice.actions;

export default recomendationSlice.reducer;
