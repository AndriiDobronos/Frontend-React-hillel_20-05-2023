import {createSlice} from "@reduxjs/toolkit";
import {getResult} from "./battle.thunk";

const initialState = {
    playerData: {
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    },
    userName: '',
    userName1: '',
    userName2: '',
    loading: true,
    error: null,
    winner: null,
    loser: null,
};

const battleSlice = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        handleSubmit: (state , action,userName1 = state.userName1,
            userName2 = state.userName2) => {
        state.playerData =  {
            playerOneName : `${userName1}`,
            playerTwoName: `${userName2}`,
            playerOneImage: ` https://github.com/${userName1}.png?size200`,
            playerTwoImage: (userName2 ? ` https://github.com/${userName2}.png?size200`: null),
                }
            },
        handleSubmit2: (state , action,userName1 = state.userName1,
                       userName2 = state.userName2) => {
            state.playerData =  {
                playerOneName : `${userName1}`,
                playerTwoName: `${userName2}`,
                playerOneImage: (userName1 ? ` https://github.com/${userName1}.png?size200`: null),
                playerTwoImage: ` https://github.com/${userName2}.png?size200`,
            }
        },
        handleReset: (state , action, userName1 = state.userName1,
                        userName2 = state.userName2) => {
            state.playerData =  {
                playerOneName : '',
                playerTwoName: state.userName2,
                playerOneImage:  null,
                playerTwoImage: ` https://github.com/${userName2}.png?size200`,
            }
        },
        handleReset2: (state , action,userName1 = state.userName1,
                      userName2 = state.userName2) => {
            state.playerData =  {
                playerOneName : state.userName1,
                playerTwoName: '',
                playerOneImage:  ` https://github.com/${userName1}.png?size200`,
                playerTwoImage: null,
            }
        },
        getUserName: (state, action) => {
            state.userName1 = action.payload;
        },
        getUserName2: (state, action) => {
            state.userName2 = action.payload;
        },
        setWinnerAction: (state,action) => {
            state.winner = action.payload;
        },
        setLoserAction: (state,action) => {
            state.loser = action.payload;
        },
        resetLoadingAction: (state,action) =>{
            state.loading = false ;
        },
        getParamsFailureAction: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getResult.pending,
            (state) => {
                state.error = null;
                state.loading = true;
            },
        );
        builder.addCase(getResult.fulfilled,
            (state, {payload}) => {
                state.loading = false;
                state.winner = payload;
                state.loser = payload;
                console.log(payload,'payload....')
            },
        );
        builder.addCase(getResult.rejected,
            (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            },
        );
    },

});
export const {getUserName, getUserName2,handleSubmit,handleSubmit2,handleReset,
    handleReset2,setWinnerAction,setLoserAction,resetLoadingAction,getParamsFailureAction} = battleSlice.actions;

export default battleSlice.reducer

