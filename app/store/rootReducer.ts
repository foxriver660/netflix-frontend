import { reducer as toastReducer } from 'react-redux-toastr'
import { reducer as userReducer } from './user/userSlice'

export const reducers = {
	toastr: toastReducer,
	user: userReducer,
}
