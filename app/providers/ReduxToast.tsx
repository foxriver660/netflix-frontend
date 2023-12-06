import React from 'react'
import ReduxToastrLib from 'react-redux-toastr'

const ReduxToast = () => {
	return (
		<ReduxToastrLib
			progressBar
			closeOnToastrClick
			timeOut={4000}
			newestOnTop={false}
			preventDuplicates
			position="top-left"
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
	)
}

export default ReduxToast
