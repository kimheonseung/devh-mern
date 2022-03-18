/**
 * API 응답 공통화
 */
const success = (res, data) => {
    if(!Array.isArray(data)) {
        data = [data];
    } 
    res.status(201).json({
        timestamp: new Date(),
        status: 200,
        message: "Success",
        description: "Response Success",
        data: data
    });
}
const successWithPaging = (res, data, paging) => {
    res.status(201).json({
        timestamp: new Date(),
        status: 200,
        message: "Success",
        description: "Response Success",
        data: data,
        paging: paging
    });
}
const error = (res, errorMessage) => {
    res.status(201).json({
        timestamp: new Date(),
        status: 500,
        message: "Error",
        description: "Response Failed",
        message: errorMessage
    });
}

export default {
    success: success,
    successWithPaging: successWithPaging,
    error: error
}