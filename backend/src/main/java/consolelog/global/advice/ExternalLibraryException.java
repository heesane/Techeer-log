package consolelog.global.advice;

import consolelog.global.error.ErrorCode;

public class ExternalLibraryException extends InternalException {
    private static final String MESSAGE = "외부 라이브러리로 인해 예외가 발생했습니다.";

    public ExternalLibraryException(ErrorCode errorCode) {
        super(errorCode);
    }
}
