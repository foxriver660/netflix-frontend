import { reducer as toastReducer } from 'react-redux-toastr'
import { reducer as userReducer } from './user/userSlice'

export const reducers = {
	user: userReducer,
	toastr: toastReducer,
}
