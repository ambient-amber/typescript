// ------------ Вариант 1 ------------
// Ругается на error_message. Не понятно, ведь функция sendPaymentRequest возвращает MyPaymentResponse.
// В MyPaymentResponse data указана как PaymentSuccessResponseData | PaymentErrorResponseD
/*type response_status = 'success' | 'failed';

interface MyPaymentRequest {
    sum: number;
    from: number;
    to: number
}

interface PaymentSuccessResponseData extends MyPaymentRequest {
    db_id: number
}

interface PaymentErrorResponseData {
    error_message: string;
    error_code: number
}

interface MyPaymentResponse {
    status: response_status,
    data: PaymentSuccessResponseData | PaymentErrorResponseData
}

function sendPaymentRequest(request: MyPaymentRequest): MyPaymentResponse {
    let is_success = true;

    if (is_success) {
        return {
            status: 'success',
            data: {
                sum: 123,
                from: 3,
                to: 2,
                db_id: 333
            }
        }
    } else {
        return {
            error_message: 'Не удалось провести оплату.',
            error_code: 333
        }
    }
}

sendPaymentRequest({
    sum: 123,
    from: 1,
    to: 2
});*/

// ------------ Вариант 2 ------------
enum response_status {
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface MyPayment {
    sum: number,
    from: number,
    to: number
}

interface MyPaymentRequest extends MyPayment {}

interface MyPaymentResponseDataSuccess extends MyPayment {
    db_id: number
}

interface MyPaymentResponseDataFailed {
    error_message: string,
    error_code: number
}

interface MyPaymentResponseSuccess {
    status: response_status.SUCCESS,
    data: MyPaymentResponseDataSuccess
}

interface MyPaymentResponseFailed {
    status: response_status.FAILED,
    data: MyPaymentResponseDataFailed
}

function pay(payment: MyPaymentRequest): MyPaymentResponseSuccess | MyPaymentResponseFailed {
    let is_success = true;

    console.log('payment', payment);

    if (is_success) {
        return {
            status: response_status.SUCCESS,
            data: {
                sum: 666,
                from: 1,
                to: 2,
                db_id: 666
            }
        }
    } else {
        return {
            status: response_status.FAILED,
            data: {
                error_message: 'Недостаточно средств',
                error_code: 333
            }
        }
    }
}

pay({
    sum: 666,
    from: 1,
    to: 2
});
