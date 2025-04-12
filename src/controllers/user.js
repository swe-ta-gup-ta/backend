import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {
    er.status(200).json({
        message: 'ok'
    })
})

export {registerUser}