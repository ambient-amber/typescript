type response_status = 'success' | 'failed';

interface PaymentRequest {
    sum: number,
    from: number,
    to: number
}

interface PaymentSuccessResponseData extends PaymentRequest {
    db_id: number
}

interface PaymentErrorResponseData {
    error_message: string,
    error_code: number
}

interface PaymentResponse {
    status: response_status,
    data: PaymentSuccessResponseData | PaymentErrorResponseData
}

function sendPaymentRequest(request: PaymentRequest): PaymentResponse {
    let is_success = true;

    if (is_success) {
        return {
            status: 'success',
            data: {
                db_id: 333,
                sum: 123,
                from: 3,
                to: 2
            }
        }
    } else {
        return {
            error_message: 'Не удалось провести оплату.',
            error_code: 333
        }
    }
}

// ---------------------------------------------------
const request:PaymentRequest =

sendPaymentRequest({
    sum: 123,
    from: 1,
    to: 2
});