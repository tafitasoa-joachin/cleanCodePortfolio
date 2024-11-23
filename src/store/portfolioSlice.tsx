import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
    id: string;
    name: string;
    description: string;
}

interface PortfolioState {
    projects: Project[];
    isLoading: boolean;
    error: string | null;
}

const initialState: PortfolioState = {
    projects: [],
    isLoading: false,
    error: null,
};

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        fetchProjectsStart: (state) => {
            state.isLoading = true;
        },
        fetchProjectsSuccess: (state, action: PayloadAction<Project[]>) => {
            state.projects = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        fetchProjectsFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const { fetchProjectsStart, fetchProjectsSuccess, fetchProjectsFailure } = portfolioSlice.actions;

export default portfolioSlice.reducer;
