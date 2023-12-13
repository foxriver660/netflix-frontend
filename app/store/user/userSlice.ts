import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocalStorage } from '@/utils/local-storage/localStorage'

import { IUserInitialState } from './user.interface'

const initialState: IUserInitialState = {
	user: getStoreLocalStorage('user'),
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
})

export const { reducer } = userSlice
