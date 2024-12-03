package com.techeerlog.member.exception;

import com.techeerlog.global.exception.BusinessException;
import com.techeerlog.global.response.ErrorCode;

public class IncorrectPasswordException extends BusinessException {

    public IncorrectPasswordException() {
        super(ErrorCode.INCORRECT_PASSWORD_ERROR);
    }
}
